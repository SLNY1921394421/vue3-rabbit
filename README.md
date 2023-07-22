# vue3-rabbit

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### 项目相关记录

由于登录接口报错， 故本地模拟json数据请求，但是请求报[404错误](https://so.csdn.net/so/search?q=404错误&spm=1001.2101.3001.7020),原因是vue-cli3.0之后创建的项目静态资源都放在了根目录下的public目录下，因此需要将json文件建在public目录下即可,并且请求时直接/不带public

```
axios.get('/MOCK_USER.json')
```



