# Deno

>This repository is for my own deno learning.

---

## Configure development environment for deno

### [Deno Installation](https://deno.land/manual@v1.4.6/getting_started/installation)

### [Setup Environment](https://deno.land/manual@v1.4.6/getting_started/setup_your_environment)

#### Tab completions

터미널에서 `tab-completion` 기능을 사용하고 있다면 다음 설정을 통해 `deno`를 위한 `completions` 기능을 추가할 수 있다.

`zsh + oh-my-zsh`를 사용하고 있으므로 아래의 과정을 거쳤다.

1. deno plugin 생성

   ```zsh
   $ mkdir ~/.oh-my-zsh/custom/plugins/deno

   $ deno completions zsh > ~/.oh-my-zsh/custom/plugins/deno/_deno
   ```

2. `.zshrc` 파일의 플러그인

   ```zsh
   plugins=(
     ... other ohmyzsh plugins
     deno
   )

   export DENO_INSTALL="$HOME/.deno"
   export PATH="$DENO_INSTALL/bin:$PATH"
   ```

3. 터미널 재시작

#### [vscode extension for deno integration](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)

vscode에서 `command palette`를 열고 `deno: Init` 명령을 실행하면 `settings.json`이 생성된다.

`Deno` interface를 위한 intellisense를 사용할 수 있다.

---

## [Deno Examples](https://deno.land/manual@v1.4.6/examples)

### [Hello, world!](./1.HelloWorld/README.md)
