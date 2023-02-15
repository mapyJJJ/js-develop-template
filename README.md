### js开发模版
---

- #### 使用 nodejs 进行脚本开发
    - 脚本入口: `src/index.ts`
    - tsc build target: `tsc-dist/index.js`
    - 使用npm管理：
        - `npm run tsc-build`   # tsc build 到 tsc-dist/
        - `npm run tsc-watch`   # 实时监听ts脚本
        - `npm run script`      # 使用node执行脚本
        - `npm run pkg`         # 打包到 bin/

- #### 使用 react + webpack + ts 进行前端开发
    - src入口: `web-src/index.txs`, `web-src/components`
    - public: `web-public/index.html`
    - 使用npm管理:
        - `npm run webpack-d` # build开发模式
        - `npm run webpack-p` # build生产模式
        - `npm run webpack-watch` # build watch
