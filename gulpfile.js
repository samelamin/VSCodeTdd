var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task('default', ['restore','build']);

gulp.task('restore', shell.task([
  'dnu restore ./src/CoreConsoleApp ./src/CoreConsoleApp.Tests'
]));

gulp.task('build', shell.task([
  'dnu build ./src/CoreConsoleApp ./src/CoreConsoleApp.Tests'
]));