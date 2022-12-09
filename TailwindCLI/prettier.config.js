module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  //为了确保类排序考虑到项目的 Tailwind 定制，需要访问 Tailwind 配置文件(Tailwind.config.js)
  //路径是相对于 Prettier 配置文件解析的
  tailwindConfig: './tailwind.config.js',
}