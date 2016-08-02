module.exports = function (){

	var obj = {};

	obj.askMany = function (questions, defaultValues, callback) {

		var response = {};

		if (arguments.length == 2 && typeof arguments[1] === 'function') {
			callback = arguments[1];
			defaultValues = {};
		}

		var pool = function(){

			for (i in questions)
			{
				obj.askOne( questions[i], defaultValues[i], function(data){ 
					response[i] = data 
					delete questions[i]
					pool()
				});

				return;
			}

			callback(response);
		}

		pool();
	}

	obj.askOne = function (question, defaultValue, callback) {
		var stdin = process.stdin, 
			stdout = process.stdout

		if (arguments.length == 2 && typeof arguments[1] === 'function') {
			callback = arguments[1];
			defaultValue = '';
		}

		stdin.resume()
		stdout.write( (question.required == false ? '(Optional) ': '') + question.info + ": ");

		stdin.once('data', function(data) {
			result = data.toString().trim();
			if (result == '' && defaultValue) {
				result = defaultValue;
			}

			if (question.required != false && result == '') {
				// Ask again
				obj.askOne(question, defaultValue, callback);
			} else {
				// Return result
				stdin.pause();
				callback(result);
			}
		})
	}

	return obj;
}()

