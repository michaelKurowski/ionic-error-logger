const fs = require('fs')
module.exports = function (message, throwToConsole = false) {
	const errorLog = `[${new Date()}] /${endpoint} - ${err}`
	fs.writeFile('logs.txt', errorLog, err => {
		if (throwToConsole) console.log(errorLog)
	})
}
