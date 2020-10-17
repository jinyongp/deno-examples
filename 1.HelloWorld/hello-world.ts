function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function hello(name: string): string {
  return "Hello, " + capitalize(name);
}

console.log(hello("jinyong"));

/**
 * $ deno run hello-world.ts
 */
