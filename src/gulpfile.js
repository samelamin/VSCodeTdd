var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task('default', ['restore','build']);

gulp.task('restore', shell.task([
  'dnu restore ./CoreConsoleApp ./CoreConsoleApp.Tests'
]));

gulp.task('build', shell.task([
  'dnu build ./CoreConsoleApp ./CoreConsoleApp.Tests'
]));