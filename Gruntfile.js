module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [
            [ "babelify", {
                "blacklist": ["strict"],
                ignore: ['**/node_modules/**']
              }],
            [ require('grunt-react').browserify ]
          ]
        },
        files: {
          "./public/scripts/build/build.js": ["./public/scripts/components/stuido.js"]
        }
      }
    },
    watch: {
      scripts: {
        files: ["./public/scripts/components/**/*.js", "./public/sass/*.scss"],
        tasks: ["browserify", "sass"]
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          './docs/css/stuido.css': './public/sass/base.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["browserify","sass"]);
};
