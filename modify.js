import {
  existsSync,
  mkdirSync,
  copyFileSync,
  writeFileSync,
  readFileSync,
  readdirSync,
  lstatSync,
  rmdirSync,
  unlinkSync,
} from 'fs'
import { createInterface } from 'readline'
import { join } from 'path'
import { stdout, stdin } from 'process'

const argv = process.argv

const ERROR_TYPES = {
  argumentError: 'argumentError',
}

/**
 * @param {string} name
 */
const create = name => {
  if (existsSync(name)) {
    console.log(`!DIR ${name} exists`)
  } else {
    mkdirSync(name)
    copyFileSync('./template/main.js', `${name}/main.js`)
    writeFileSync(
      `${name}/main.spec.js`,
      readFileSync('./template/main.spec.js', 'utf-8').replace('example', name)
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
  return readdirSync(pathName).reduce(
    (names, name) => {
      const joinedPath = join(pathName, name)
      return [
        ...(lstatSync(joinedPath).isDirectory()
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
  const rl = createInterface({
    input: stdin,
    output: stdout,
    terminal: false,
  })
  rl.on('line', input => {
    rl.close()
    switch (input.trim()) {
      case 'Y':
        files.forEach(f => (f.endsWith('/') ? rmdirSync(f) : unlinkSync(f)))
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
    if (!existsSync(name)) {
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
