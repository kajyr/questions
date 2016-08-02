
var questions = require('./questions.js');

questions.askOne({ info:'Enter your name' }, "John", function(result){
	console.log('You name is '+result);
})

