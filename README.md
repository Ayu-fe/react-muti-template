# react-muti-template

react多页应用模板
从 0-1 搭建一个 react 多页应用


基本的react解析
```
{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
},
```


使用Ts
```
{
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
},
```

使用Less和css module和tailwind

```
{
  test: /\.module\.less$/,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        modules: true,
      },
    },
    "less-loader",
  ],
},
{
  test: /\.less$/,
  use: [
    "style-loader",
    "css-loader",
    "postcss-loader",
    "less-loader",
  ],
  exclude: /\.module\.less/,
},
```
