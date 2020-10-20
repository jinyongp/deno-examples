# Dependencies

Deno는 dependency 관리를 위해 URLs를 사용하고, 별도의 package 관리자 없이 외부 모듈을 로컬 모듈로 직접 `import`하여 사용한다.

Package manager가 없으므로 다수의 파일에서 공통적으로 사용하는 외부 모듈의 경우 이를 한데 묶을 필요가 있다. 이를 위해 `deps.ts` 파일을 사용한다.

모든 dependency URLs를 로컬 상의 [`deps.ts`](./deps.ts) 파일에 배치하는 규범이 있다. [`deps.ts`](./deps.ts)에서는 이를 로컬 모듈로 사용하기 위해 `export`해야 한다

개발을 위한 dependency는 `dev_deps.ts` 파일에서 관리한다.

- [dpts.ts](deps.ts)
- [example.ts](example.ts)
