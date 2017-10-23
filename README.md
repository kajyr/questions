# questions.js

*Interactive shell for your node.js cli apps!*

questions.js is a minimal interface to ask interactive questions in the terminal

## Install
```bash
$ npm install questions
```

---

## Examples
Ask one question: (exampleOne.js)
```js
var questions = require('questions');

questions.askOne({ info:'Enter your name', default:"John" }, function(result){
  console.log('You name is '+result);
})
```

```bash
$ node exampleOne.js
  Enter your name: Hugo
  You name is Hugo

```

---

Ask multiple questions: (exampleMany.js)
```js
var questions = require('questions');

questions.askMany({
  name: { info:'Name', default:"Carlo" },
  age: { info:'Age'},
  phone: { info:'Phone', required: false },
}, function(result){
  console.log(result);
})
```

```bash
$ node exampleMany.js
  Name: Hugo
  Age: 28
  (Optional) Phone: 00351930000000
  { name: 'Hugo', age: '28', phone: '00351930000000' }
```


---
## License

MIT.
