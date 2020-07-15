const fs = require('fs')
const readline = require('readline')
const path = require('path')
const { stdout, stdin } = require('process')

const argv = process.argv

const ERROR_TYPES = {
  argumentError: 'argumentError',
}

/**
 * @param {string} name
 */
const create = name => {
  if (fs.existsSync(name)) {
    console.log(`!DIR ${name} exists`)
  } else {
    fs.mkdirSync(name)
    fs.copyFileSync('./template/main.js', `${name}/main.js`)
    fs.writeFileSync(
      `${name}/main.spec.js`,
      fs
        .readFileSync('./template/main.spec.js', 'utf-8')
        .replace('example', name)
    )
    // fs.copyFileSync('./template/main.spec.js', `${dir}/main.spec.js`)
    console.log(`
  ./${name}/main.js
  ./${name}/main.spec.js
  created
      `)
  }
  return 0
}

/**
 * @param {string} pathName
 * @return {string[]} file path names
 */
const getFolderFiles = pathName => {
  return fs.readdirSync(pathName).reduce(
    (names, name) => {
      const joinedPath = path.join(pathName, name)
      return [
        ...(fs.lstatSync(joinedPath).isDirectory()
          ? getFolderFiles(joinedPath)
          : [joinedPath]),
        ...names,
      ]
    },
    [pathName + '/']
  )
}

/**
 * @param {string[]} files
 * @param {Function} r
 */
const ensure = (files, r) => {
  const rl = readline.createInterface({
    input: stdin,
    output: stdout,
    terminal: false,
  })
  rl.on('line', input => {
    rl.close()
    switch (input.trim()) {
      case 'Y':
        files.forEach(f =>
          f.endsWith('/') ? fs.rmdirSync(f) : fs.unlinkSync(f)
        )
        r()
        break
      case 'N':
        r()
        break
      default:
        console.log('?(Y|N)')
        ensure(files, r)
    }
  })
}

/**
 * @param {string} name
 */
const remove = name => {
  return new Promise(r => {
    if (!fs.existsSync(name)) {
      console.log(`!DIR ${name} doesn't exist`)
      r()
    } else {
      const files = getFolderFiles(name)

      console.log(`
Remove:

${files.join('\n')}

?(Y|N)`)

      ensure(files, r)
    }
  })
}

/**
 * @param {string[]} argv
 */
const feedArgs = argv => {
  const [action, ...names] = argv.slice(2)
  if (
    !['new', 'delete', 'remove'].includes(action) ||
    names.findIndex(n => isNaN(parseInt(n))) > -1
  ) {
    throw new Error(ERROR_TYPES.argumentError)
  }
  const format = a => `000${a}`.slice(-4)
  console.log(action, names)
  switch (action) {
    case 'new':
      names.map(format).forEach(a => create(a))
      break
    case 'delete':
    case 'remove':
      const removeActions = names.map(a => () => remove(format(a)))
      const resolve = i => {
        if (removeActions[i]) {
          removeActions[i]()
            .then(() => {
              resolve(i + 1)
            })
            .catch(e => {
              throw e
            })
        }
      }
      resolve(0)
      break
  }
}

try {
  feedArgs(argv)
} catch (error) {
  if (error.message === ERROR_TYPES.argumentError) {
    console.error(`
!Usage:
  new [problem number]
  delete|remove [problem number]
`)
  } else {
    throw error
  }
}
