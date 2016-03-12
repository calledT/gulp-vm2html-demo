'use strict'

var $               = require('gulp-load-plugins')();
var _               = require('lodash');
var fs              = require('fs');
var del              = require('del');
var gulp            = require('gulp');
var path            = require('path');
var browserSync     = require('browser-sync');

gulp.task('vm', function() {
  return gulp.src('src/vm/**/*.vm')
    .pipe($.vm2html({
      vmRootpath: 'src',
      mockRootpath: 'mock',
      exclude: '**/parse/**/*.vm',
      macro: 'src/vm/macro.vm'
    }))
    .pipe(gulp.dest('output/html'));
});

gulp.task('serve', ['vm'], function(cb) {
  browserSync({
    open: 'external',
    startPath: 'directive.html',
    server: {baseDir: ['output/html']}
  });
});

gulp.task('default', ['serve']);
