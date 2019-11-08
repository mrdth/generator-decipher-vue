'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const pascalCase = require('just-pascal-case')

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the first-class ${chalk.red('Decipher Tools VueJS')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'toolName',
        message: 'What is the toolname?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description to use in decipher:',
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.toolNamePascal = pascalCase(props.toolName);
    });
  }

  default() {
    mkdirp(this.props.toolName);
    this.destinationRoot(this.destinationPath(this.props.toolName));
  }

  writing() {
    const templates = [
      'webpack.mix.js',
      'src/js/index.js',
      'src/xml/meta.xml',
      'src/xml/styles.xml'
    ];

    this.fs.copy(this.templatePath('*'), this.destinationPath());
    this.fs.copy(this.templatePath('.*'), this.destinationPath());


    templates.forEach( tpl => this.fs.copyTpl(
      this.templatePath(tpl),
      this.destinationPath(tpl),
      this.props
    ));

    this.fs.copyTpl(
      this.templatePath('src/js/components/toolname.vue'),
      this.destinationPath(`src/js/components/${this.props.toolName}.vue`),
      this.props
    );

  }

  install() {
    this.yarnInstall([
      'vue',
      'cross-env',
      'eslint',
      'eslint-plugin-vue',
      'laravel-mix',
      'laravel-mix-polyfill',
      'semistandard',
      'vue-template-compiler'
    ], {
      'dev': true ,
      'production': false
    });

    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }
};
