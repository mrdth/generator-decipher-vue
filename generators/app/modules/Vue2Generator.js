module.exports = class vue2Generator {
  constructor(context) {
    this.context = context;
  }

  writing() {
    const templates = [
      "webpack.mix.js",
      "index.html",
      "src/js/index.js",
      "src/xml/meta.xml",
      "src/xml/styles.xml"
    ];

    this.context.fs.copy(
      this.context.templatePath("*"),
      this.context.destinationPath()
    );
    this.context.fs.copy(
      this.context.templatePath("src/icons/*"),
      this.context.destinationPath("src/icons")
    );
    this.context.fs.copy(
      this.context.templatePath("src/css/*"),
      this.context.destinationPath("src/css")
    );
    this.context.fs.copy(
      this.context.templatePath(".*"),
      this.context.destinationPath()
    );

    templates.forEach(tpl =>
      this.context.fs.copyTpl(
        this.context.templatePath(tpl),
        this.context.destinationPath(tpl),
        this.context.props
      )
    );

    this.context.fs.copyTpl(
      this.context.templatePath("src/js/components/toolname.vue"),
      this.context.destinationPath(
        `src/js/components/${this.context.props.toolName}.vue`
      ),
      this.context.props
    );

    // Move the correct package.json template into place, and delete the redundant oen.
    this.context.fs.move(
      this.context.destinationPath(
        `package-vue${this.context.props.vueVersion}.json`
      ),
      this.context.destinationPath("package.json")
    );

    this.context.fs.delete(this.context.destinationPath("package-vue*.json"));
  }

  install() {
    const packages = [
      "cross-env",
      "eslint",
      "eslint-plugin-vue",
      "eslint-config-standard",
      "eslint-plugin-import",
      "eslint-plugin-node",
      "eslint-plugin-promise",
      "eslint-plugin-standard",
      "laravel-mix",
      "laravel-mix-polyfill",
      "vue-template-compiler",
      "browser-sync",
      "browser-sync-webpack-plugin"
    ];

    if (this.context.props.packageManager === "npm") {
      this.context.npmInstall(packages, {
        "save-dev": true,
        production: false
      });
    } else {
      this.context.yarnInstall(packages, {
        dev: true,
        production: false
      });
    }

    this.context.installDependencies({
      npm: this.context.props.packageManager === "npm",
      bower: false,
      yarn: this.context.props.packageManager === "yarn"
    });
  }
};
