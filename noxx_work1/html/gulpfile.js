const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync')

// scss を css に変換し、autoprefixer を適用した上で dist/ に出力する.
gulp.task('scss', () =>
  gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css/'))
)

// index.html を src から dist/ にコピーするだけ.
gulp.task('html', () => gulp.src('./src/*.html').pipe(gulp.dest('./dist')))

// イメージ を src から dist/ にコピーするだけ.
gulp.task('copy-assets', () =>
  gulp.src('./src/img/**/*').pipe(gulp.dest('./dist/img'))
)

// browser-syncを起動させる.
gulp.task('bs', () => browserSync.init({ server: './dist' }))

// ファイルを監視する.
gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', gulp.task('scss'))
  gulp.watch('src/*.html', gulp.task('html'))
  gulp.watch('src/img/', gulp.task('copy-assets'))
  gulp.watch('dist/').on('change', browserSync.reload)
})

// 先述したタスクを並列で実行する.
gulp.task('serve', gulp.parallel('html', 'copy-assets', 'scss', 'bs', 'watch'))
