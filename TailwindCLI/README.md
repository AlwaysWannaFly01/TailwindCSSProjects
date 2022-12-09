#### 1.使用 Prettier 自动进行类排序

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
