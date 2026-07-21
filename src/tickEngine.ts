export type TickCallback = (currentTick: number) => void;

export class TickEngine {
  private currentTick: number = 0;
  private isRunning: boolean = false;
  private tickRateMs: number;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private listeners: TickCallback[] = [];

  constructor(tickRateMs: number = 1000) {
    this.tickRateMs = tickRateMs;
  }

  public subscribe(callback: TickCallback): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  }

  public start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.intervalId = setInterval(() => {
      this.currentTick++;
      this.listeners.forEach((fn) => fn(this.currentTick));
    }, this.tickRateMs);
  }

  public stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
  }

  public getTick(): number {
    return this.currentTick;
  }
}