"use strict";
// Load plugins
var gulp = require('gulp');
var cp = require('child_process');
var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var browserSync = require('browser-sync').create();


var paths = {
  scripts: {
    src: 'assets/js/*.js',
    dest: 'dist/assets/js/'
  },
  images: {
    src: 'assets/img/**/*',
    dest: 'dist/assets/img/'
  }
};

function jekyllBuild() {
  return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
}


// Optimize Images
function images() {
  return gulp.src(paths.images.src)
      .pipe(newer(paths.images.dist))
      .pipe(
  imagemin([
  imagemin.gifsicle({ interlaced: true }),
  imagemin.jpegtran({ progressive: true }),
  imagemin.optipng({ optimizationLevel: 5 }),
  imagemin.svgo({
            plugins: [
              {
                removeViewBox: false,
                collapseGroups: true
              }
            ]
          })
        ])
      )
      .pipe(gulp.dest(paths.images.dist));
  }

function js() {
  return gulp.src(paths.scripts.src)
  .pipe(gulp.dest(paths.scripts.dest))
  .pipe(browserSync.reload({stream:true}))
}

function browserSyncServe(done) {
  browserSync.init({
    server: {
      baseDir: "dist"
    },
    port: 3000
  })
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function watch() {
  gulp.watch(paths.scripts.src, js)
  gulp.watch(paths.images.src, images)
  gulp.watch(
    [
      "assets/scss/*.scss",
      "assets/js/*.js",
      "*.html",
      "_data/*.yml",
      "_layouts/*.html",
      "_includes/*.html",
      "_includes/*.svg",
      "content/**/*.md",
      "content/*",
      "_posts/*"
  ],
  gulp.series(jekyllBuild, browserSyncReload));
}

gulp.task('default', gulp.parallel(jekyllBuild, browserSyncServe, watch))