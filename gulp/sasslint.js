var gulp     = require('gulp'),
sassLint     = require('gulp-sass-lint'),
cfg          = require('../config.json');

gulp.task('sasslint', function () {
    return gulp.src(cfg.src.root + '/**/*.{scss,sass}')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
