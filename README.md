# __ProjectName__

### Dev

```shell
npm install
npm run dev
```

### List All Dependencies

```shell
node -e "console.log(Array.from(new Set(Object.entries(require('./package.json')).filter(([key]) => key === 'dependencies' || key === 'devDependencies' || key === 'peerDependencies').reduce((p, [, c]) => [...p, ...Object.keys(c)], []))).join(' '))"
```
