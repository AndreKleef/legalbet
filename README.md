# mstart – frontend boilerplate

This is a frontend boilerplate to start projects with less pain and time spent. It uses Sass, Pug and Babel.

## HOW-TO

**Preparations:**
1. Install [Node.JS and npm](https://nodejs.org/en/download/).
2. Install [Gulp CLI](https://www.npmjs.com/package/gulp-cli) globally.

**Steps to run all this stuff:**
1. Clone or download this repository.
2. Open terminal/console in this repository's folder.
3. Type `npm i` to install dev-dependencies (npm packages required for this boilerplate).
4. Type `npm start` to run default Gulp task or use any of the Gulp tasks below.

## Gulp Tasks List

To run a task, open terminal/console in a project folder and type `gulp <task_name>`, e.g. `gulp build`.
If task has a `watch` thing equal to true, you can launch a watcher for it adding `:watch` to the end of a task name, e.g. `sass:watch`.

| Task Name  | Description                                                                               | Watch?  |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| build      | Builds the project and includes only needed files for it.                                 | `false` |
| clean      | Deletes ./build directory.                                                                | `false` |
| default    | Default task, that runs build task, watches for changes and starts a local server.        | `false` |
| deploy     | Deploys website to Github Pages.                                                          | `false` |
| images     | Copies images to ./build directory and optimizes them.                                    | `true`  |
| svg-sprite | Takes SVG icons from `./dev/images/svg-icons` folder and creates symbol sprite.           | `true`  |
| fonts      | Copies fonts to ./build directory.                                                        | `true`  |
| pug        | Generates HTML files out of PUG templates.                                                | `true`  |
| sass       | Generates CSS files out of Sass files, autoprefixing needed rules and minifying CSS.      | `true`  |
| sass-lint  | Runs linter for Sass. All rules can me found and modified in `./.sass-lint.yaml` file.    | `true`  |
| scripts    | Copies Javascript to ./build directory, transpiles Javascript to ES2015 and uglifies it.  | `true`  |
| server     | Starts a local server at `localhost:3000`.                                                | `false` |
| watch      | Watches for changes in PUG templates, Sass and Javascript files, and images.              | o_O     |

## Structure Explanation

This boilerplate has a structure recommended to follow.  
To change any dev or build paths, open `config.json` and change them in whatever manner you like (on your own risk).

| Path                              | Description                                                                          |
| --------------------------------- | ------------------------------------------------------------------------------------ |
| `./.editorconfig`                 | Config for text editor to follow the codestyle all across the project.               |
| `./config.json`                   | This config file contains basic configuration for this boilerplate.                  |
| `./.sass-lint.yaml`               | Configuration file for Sass linter.                                                  |
| `./gulpfile.js`                   | Includes all gulp tasks from ./gulp folder.                                          |
| `./package.json`                  | Information about repository, dependencies and stuff.                                |
| `./gulp/`                         | Gulp tasks here, each one in a separate file.                                        |
| `./dev/`                          | Development folder, where all the work happens.                                      |
| `./dev/images/`                   | Store your images here.                                                              |
| `./dev/images/svg-icons/`         | Store your SVG icons here, that need to be collected inside symbol sprite.           |
| `./dev/fonts/`                    | Store your fonts here.                                                               |
| `./dev/js/`                       | Store your Javascript here.                                                          |
| `./dev/sass/`                     | Sass files are here, separated to different folders and files.                       |
| `./dev/sass/components/`          | Components' styles. Each file's name must be same as component's class.              |
| `./dev/sass/global/`              | Global Sass things.                                                                  |
| `./dev/sass/global/_base.sass`    | Base settings of a project.                                                          |
| `./dev/sass/global/_helpers.sass` | Helper classes to be used on demand.                                                 |
| `./dev/sass/global/_mixins.sass`  | Useful mixins to make work happen faster.                                            |
| `./dev/sass/global/_theme.sass`   | Project's theme; all variables stored here.                                          |
| `./dev/sass/libs/`                | Directory for storing vendor styles.                                                 |
| `./dev/sass/style.sass`           | This file collects all Sass files into one.                                          |
| `./dev/views/`                    | Pug templates here.                                                                  |
| `./dev/views/layouts/`            | Store your pug layouts here (check example file).                                    |
| `./dev/views/pages/`              | Create your pages' templates here, files from here are getting compiled to HTML.     |
| `./dev/views/partials/`           | Repeating pug templates to be used all across the website, e.g. header, sidebar etc. |
| `./dev/views/settings.pug`        | Basic settings that are used to configure pug templates.                             |

## Symbol SVG Sprite

The sprite-generating method used here creates SVG symbols inside sprite file, which can be used like this anywhere in your HTML:
```HTML
<svg>
  <use xlink:href="path/to/sprite.svg#icon-name" />
</svg>
```

***

Made with ♥ by [Nikola](https://markelov.cc)
