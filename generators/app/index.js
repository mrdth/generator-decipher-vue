"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const mkdirp = require("mkdirp");
const pascalCase = require("just-pascal-case");
const Vue2Generator = require("./modules/Vue2Generator");
const Vue3Generator = require("./modules/Vue3Generator");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the first-class ${chalk.red(
          "Decipher Tools VueJS"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "list",
        name: "vueVersion",
        message: "Which version of Vue do you want to base the plugin on?",
        choices: [
          {
            name: "Vue 2",
            value: "2"
          },
          {
            name: "Vue 3",
            value: "3"
          }
        ],
        default: "vue2"
      },
      {
        type: "input",
        name: "toolName",
        message: "What is the toolname?"
      },
      {
        type: "input",
        name: "description",
        message: "Description to use in decipher:"
      },
      {
        type: "list",
        name: "packageManager",
        message: "Which package manager do you prefer to use?",
        choices: ["npm", "yarn"],
        default: "yarn"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.toolNamePascal = pascalCase(props.toolName);

      this.pluginGenerator =
        props.vueVersion === "2"
          ? new Vue2Generator(this)
          : new Vue3Generator(this);
    });
  }

  default() {
    mkdirp.sync(this.props.toolName);
    this.destinationRoot(this.destinationPath(this.props.toolName));
  }

  writing() {
    this.pluginGenerator.writing(this);
  }

  install() {
    this.pluginGenerator.install(this);
  }
};
