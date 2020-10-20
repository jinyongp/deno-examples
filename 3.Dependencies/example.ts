import { add, multiply } from "./deps.ts";

function totalCost(outBound: number, inBound: number, tax: number): number {
  return multiply(add(outBound, inBound), tax);
}

console.log(totalCost(19, 31, 1.2));

/**
 * $ deno run example.ts
 */
