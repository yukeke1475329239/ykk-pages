#! /usr/bin/env node
// node cli 应用入口文件必须要有这样的文件头

//如果macOS 和linux还需要修改此文件的读写权限为 755
//具体通过 chmod 755 cli.js
process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..'))
require('gulp/bin/gulp')