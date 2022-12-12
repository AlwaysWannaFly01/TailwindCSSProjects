module.exports = {
  plugins: {
    "postcss-import": {},
    // postcss-Nesting => 基于正在进行的 CSS 嵌套规范
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
    // 如果您在项目中使用 postcss-preset-env，那么您应该确保禁用嵌套，并让 tailwindcss/nest 代替您处理它
    "postcss-preset-env": {
      features: { "nesting-rules": false }
    }
  }
};