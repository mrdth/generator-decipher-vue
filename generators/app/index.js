"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const mkdirp = require("mkdirp");
const pascalCase = require("just-pascal-case");

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
        type: "input",
        name: "toolName",
        message: "What is the toolname?"
      },
      {
        type: "input",
        name: "description",
        message: "Description to use in decipher:"
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
      "webpack.mix.js",
      "src/index.html",
      "src/js/index.js",
      "src/xml/meta.xml",
      "src/xml/styles.xml"
    ];

    this.fs.copy(this.templatePath("*"), this.destinationPath());
    this.fs.copy(
      this.templatePath("src/icons/*"),
      this.destinationPath("src/icons")
    );
    this.fs.copy(
      this.templatePath("src/css/*"),
      this.destinationPath("src/css")
    );
    this.fs.copy(this.templatePath(".*"), this.destinationPath());

    templates.forEach(tpl =>
      this.fs.copyTpl(
        this.templatePath(tpl),
        this.destinationPath(tpl),
        this.props
      )
    );

    this.fs.copyTpl(
      this.templatePath("src/js/components/toolname.vue"),
      this.destinationPath(`src/js/components/${this.props.toolName}.vue`),
      this.props
    );
  }

  install() {
    this.yarnInstall(
      [
        "cross-env",
        "eslint",
        "eslint-config-standard",
        "eslint-plugin-vue",
        "eslint-plugin-import",
        "eslint-plugin-node",
        "eslint-plugin-promise",
        "eslint-plugin-standard",
        "laravel-mix-polyfill",
        "vue-template-compiler",
        "browser-sync",
        "browser-sync-webpack-plugin"
      ],
      {
        dev: true,
        production: false
      }
    );

    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }
};
