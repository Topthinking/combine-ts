# 测试TS依赖合并

查看`index.ts`，执行`yarn start`查看结果


> 如果是TS项目，那么需要做如下设置

**`tsconfig.json`需要制定待注入的库名称**

```json
{
  "compilerOptions": {
    "types": ["node", "libb"]
  }
}
```