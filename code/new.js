const fs = require('fs')

const argv = process.argv

const tryNew = argv => {
  const pNum = argv && argv[2]
  if (isNaN(parseInt(pNum))) {
    console.log('!Usage: new [problem number]')
  } else {
    const dir = `000${pNum}`.slice(-4)
    if (fs.existsSync(dir)) {
      console.log(`!DIR ${dir} exists`)
    } else {
      fs.mkdirSync(dir)
      fs.copyFileSync('./template/main.js', `${dir}/main.js`)
      fs.copyFileSync('./template/main.spec.js', `${dir}/main.spec.js`)
      console.log(`
  ./${dir}/main.js
  ./${dir}/main.spec.js
  created
      `)
    }
  }
  return 0
}

tryNew(argv)
