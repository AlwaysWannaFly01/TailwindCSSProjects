#### 1. 运行 CLI 工具扫描模板文件中的类并构建 CSS
```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

#### 2. 使用 Prettier 自动进行类排序

[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

```
npm install -D prettier prettier-plugin-tailwindcss
```

```
// prettier.config.js
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}
```
