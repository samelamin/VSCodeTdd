var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task('default', ['restore','build']);

gulp.task('restore', shell.task([
  'dnu restore ./src/CoreConsoleApp*'
]));

gulp.task('build', shell.task([
  'dnu build ./src/CoreConsoleApp*'
]));

gulp.task('test', shell.task([
  'dnx -p ./src/*.Tests/ test'
]));

gulp.task('watch', function () {
  gulp.watch('*.cs', ['test']);
});