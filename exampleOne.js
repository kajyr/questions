
var questions = require('./questions.js');

questions.askOne({ info:'Enter your name', default:"John" }, function(result){
	console.log('Your name is '+result);
})
