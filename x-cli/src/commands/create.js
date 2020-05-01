const fs = require('fs')
const replace = require('stream-replace')
const chalk = require('chalk')
const util = require('./util')
const info = chalk.keyword('cyan')

class CreateResources {
  constructor(keyWords) {
    this.keyWords = keyWords
  }

  async run() {
    const folders = [
      'adomain',
      'application/usecase',
      'infrastructure/repository',
      'userapplication/controller'
    ]
    await this.createDestFolders(
      folders,
      this.keyWords.outputPath,
      this.keyWords.instanceUseCase
    )
    const mapper = {
      Controller: 'userapplication/controller',
      Provider: '.',
      Repository: 'infrastructure/repository',
      Service: 'application/usecase'
    }
    // eslint-disable-next-line no-path-concat
    const templatesFolder = __dirname + '/../templates'
    await util.createFolder(this.keyWords.outputPath)
    fs.readdirSync(templatesFolder).forEach((templateName) => {
      const outputFileName = `${this.keyWords.outputPath}/${this.keyWords.instanceUseCase}/${mapper[templateName]}/${this.keyWords.useCase}${templateName}.js`
      const templatePath = `${templatesFolder}/${templateName}`
      fs.createReadStream(templatePath)
        .pipe(replace(/{{useCase}}/gi, this.keyWords.useCase))
        .pipe(replace(/{{instanceUseCase}}/gi, this.keyWords.instanceUseCase))
        .pipe(fs.createWriteStream(outputFileName))
      console.log(info(outputFileName))
    })
  }

  createDestFolders(folders, outputPath, instanceUseCase) {
    folders.forEach((folder) =>
      util.createFolder(`${outputPath}/${instanceUseCase}/${folder}`)
    )
  }
}

module.exports = CreateResources
