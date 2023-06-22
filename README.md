
```bash
# 先安装依赖
cd js-develop-template && npm install
```

---

#### 目录说明：
- `bin` - nodejs脚本打包后可执行文件存放目录
- `src` - nodejs脚本文件存放地址（入口: index.ts）
- `tsc-dist` - 存放ts脚本编译后生成的js文件
- `web-public` - webpack打包react后生成的静态文件地址
- `web-src` - react开发目录（入口:index.tsx)

---

#### 开发说明：
- react引入css文件，请直接在index.tsx文件中使用import引入
- 不要修改package.json文件

---

#### ts脚本开发命令说明：
- `npm run tsc-build` - build ts脚本
- `npm run tsc-watch` - 监听ts脚本文件
- `npm run script`    - 运行ts脚本，查看效果
- `npm run pkg`       - 将ts脚本打包为可执行文件


#### react开发命令说明：
- `npm run webpack-d`    - build开发模式
- `npm run webpack-p`    - build生产模式
- `npm run webpack-watch`- build watch
- `npm run webpack-dev`  - 本地运行ract，并且启动热重载，用于调试
