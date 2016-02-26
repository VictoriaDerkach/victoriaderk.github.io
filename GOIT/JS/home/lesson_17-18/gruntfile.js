module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
          src: ['src/js/*.js'],
          dest: 'js/script.main.js'
      },
      html: {
          src: ['src/html/header.html', 'src/html/content.html', 'src/html/footer.html'],
          dest: 'src/html/index.html'
      },
      css: {
          src: ['src/css/*.css'],
          dest: 'css/style.main.css'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/style.main.min.css': ['css/style.main.css']
        }
      }
    },
    htmlmin: {                                     
      dist: {                                      
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   
          'index.html': 'src/html/index.html'
        }
      }
    },    
    uglify: {
      dist: {
        src: ['js/script.main.js'],
        dest: 'js/script.main.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat:js', 'concat:css', 'concat:html', 'cssmin', 'htmlmin', 'uglify']);

};
