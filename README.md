some of the command in package.json , you should use `'run'` in their command . unlike the start command : `npm start` , a command like this

```js
"dev" : "nodemon app.js"
```

needs to be run like this : npm run dev