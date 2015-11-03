var Fannypack = require('fannypack')
var gulp      = require('gulp')
var $         = Fannypack.$

// Additional Packages
var riot        = require('gulp-riot')
var concat      = require('gulp-concat')
var insert      = require('gulp-insert')

Fannypack.Tasks['tags'] = function(config){
  if(!config.tags) return

  var paths = {
    src: $.Pather.join(config.root.src, config.tags.src, '/**/*'),
    dest: $.Pather.join(config.root.src, config.tags.dest) // dump into src/javascripts
  }

  gulp.task('tags', function() {
    return gulp.src(paths.src)
      .pipe( concat(config.tags.output) )
      .pipe( riot({compact: true}) )
      // insert riot dependency declaration
      .pipe( insert.prepend("import riot from 'riot';\n\n") )
      .pipe( gulp.dest(paths.dest) )
      .pipe( $.BrowserSync.reload({stream:true}) )
  })
}
