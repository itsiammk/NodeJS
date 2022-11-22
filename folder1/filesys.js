const {readFileSync, WriteFileSync, writeFileSync} = require('fs')

writeFileSync('./folder1/result.txt',`This is automatic file creation and if already created then it will update to this sentence.`)