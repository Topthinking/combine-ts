# 测试TS依赖合并

查看`index.ts`、`index.js`这两个文件


> 如果是TS项目，那么需要做如下设置

**`tsconfig.json`需要制定待注入的库名称**

```json
{
  "compilerOptions": {
    "types": ["node", "@xmly/award-plugin-dva"]
  }
}
```

## 运行

```sh
# TypeScript引用
npm run ts

# es5引用
npm run es
```