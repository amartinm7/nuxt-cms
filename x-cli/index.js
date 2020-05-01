#! /usr/bin/env node
const console = require('console')
const mason = require('commander')
const camelCase = require('lodash.camelcase')

const chalk = require('chalk')
const { version } = require('./package.json')
// eslint-disable-next-line no-unused-vars
const error = chalk.bold.red
const warning = chalk.keyword('orange')
const info = chalk.keyword('cyan')

// commands, add as many as you wish
const CreateResources = require('./src/commands/create')

function generateKeyWords(useCase) {
  const instanceUseCase = camelCase(useCase)
  const folderDest = 'created'
  const outputPath = 'build/' + folderDest
  return { useCase, instanceUseCase, folderDest, outputPath }
}

mason.version(version)

mason
  .command('create usecase <useCase>')
  .description('creates a new usecase')
  .action((useCase) => {
    const keyWords = generateKeyWords(useCase)
    console.log(info('creating usecase in path... %s'), keyWords.outputPath)
    new CreateResources(keyWords).run()
  })

mason.command('*').action(() => {
  mason.help()
})

mason.parse(process.argv)

if (!mason.args.length) {
  console.log(
    warning('Please, read the instruccions before keep on working...')
  )
  mason.help()
}
