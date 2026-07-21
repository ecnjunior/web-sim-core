/**
 * A simple Pseudo-Random Number Generator (PRNG) using LCG algorithm.
 * Useful for reproducible deterministic simulations in web games.
 */
export class DeterministicPRNG {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  /**
   * Returns a pseudo-random float between 0 and 1.
   */
  public nextFloat(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  /**
   * Returns a pseudo-random integer between min and max (inclusive).
   */
  public nextInt(min: number, max: number): number {
    return Math.floor(this.nextFloat() * (max - min + 1)) + min;
  }
}