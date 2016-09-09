var eslint = require('eslint/lib/cli'),
    gulp = require('gulp'),
    globby = require('globby'),
    watch = require('gulp-watch');

// run eslint without an additional plugin
gulp.task('lint', function(done) {
  var eslint = require('gulp-eslint');

  return gulp
    .src(['./app/**/*.js', './server.js', '!./app/**/*.json'])
    .pipe(eslint())
    .pipe(eslint.format());
  // patterns with the same form as gulp.src(patterns)
});


gulp.task('watch', function() {
  gulp.watch("./app/**/*.js", ['lint']);
  gulp.watch("./server.js", ['lint']);
});

gulp.task('default',['lint','watch']);
