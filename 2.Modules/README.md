# Import and export modules

- `import`는 로컬 파일 시스템이나 원격 상에서 사용할 모듈을 포함하도록 한다. URLs 혹은 파일의 경로를 `import` 할 수 있다.
- `export`는 외부에서 `import` 할 수 있는 모듈을 지정할 수 있다.

Deno에서는 ECMAScript 6인 `import/export` 표준을 사용한다. 파일의 확장자를 꼭 포함해야 한다. `index.js`를 생략할 수 없다.

- [arithmetic.ts](arithmetic.ts)
- [local.ts](local.ts)
- [remote.ts](remote.ts)
