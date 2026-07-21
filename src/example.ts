// src/example.ts
import { DeterministicPRNG, TickEngine } from './index';

// 1. Testando Seeded Randomness
const rng = new DeterministicPRNG(12345);
console.log('Número aleatório gerado:', rng.nextInt(1, 100));

// 2. Testando Tick Loop Simulation
const sim = new TickEngine(1000); // 1 tick por segundo

sim.subscribe((tick) => {
  console.log(`Tick da simulação: ${tick}`);
  if (tick >= 3) {
    sim.stop();
    console.log('Simulação finalizada!');
  }
});

sim.start();