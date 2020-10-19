import {
  add,
  multiply,
} from "https://x.nest.land/ramda@0.27.0/source/index.js";

function totalCost(outBound: number, inBound: number, tax: number): number {
  return multiply(add(outBound, inBound), tax);
}

console.log(totalCost(19, 31, 1.2));

/**
 * $ deno run remote.ts
 */
