const fs = require('fs')
module.exports = function (whereHappened, message, throwToConsole = false) {
	const errorLog = `[${new Date()}] ${whereHappened} - ${message}`
	fs.writeFile('logs.txt', errorLog, err => {
		if (throwToConsole) console.log(errorLog)
	})
}
