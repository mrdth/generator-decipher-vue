'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the first-class ${chalk.red('generator-decipher-vue')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'toolName',
        message: 'What is the toolname?',
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  install() {
    mkdirp(this.props.toolName);
    this.installDependencies(this.destinationPath(this.props.toolName));
  }
};
