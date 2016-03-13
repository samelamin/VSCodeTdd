var gulp = require('gulp');
 shell = require('gulp-shell');
 watch = require('gulp-watch');
 
gulp.task('default', ['restore','build', 'watch']);

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
  gulp.watch('./src/*/*.cs', ['test']);
});