const compilerPackage = require('google-closure-compiler');
const closureCompiler = compilerPackage.gulp();

// compilerPackage.compiler.JAR_PATH = undefined;
// compilerPackage.compiler.prototype.javaPath = './node_modules/.bin/closure-gun';
const gulp = require('gulp');

const rollup = require('rollup-stream');
gulp.task('js', () => {
    return gulp.src('./dist/time-f.js')
        .pipe(closureCompiler({
            compilation_level: 'SIMPLE_OPTIMIZATIONS',
            language_in: 'ECMASCRIPT6_STRICT',
            language_out: 'ECMASCRIPT5_STRICT',
            js_output_file: 'time-f.min.js'
        }))
        .pipe(gulp.dest('./dist'));
});
