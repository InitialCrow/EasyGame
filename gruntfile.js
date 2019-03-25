const webpackConfig = require('./webpack.config.js');
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: ['dist/'],
      module: ['node_modules/']
    },
     webpack: {
      myConfig: webpackConfig,
      dev: Object.assign({ watch: true }, webpackConfig)
    },

  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-exec');
  // Default task(s).
  grunt.registerTask('clear-dist', ['clean:dist']);
  grunt.registerTask('clear-module', ['clean:module']);
  grunt.registerTask('clear-all', ['clean']);
  grunt.registerTask('start',['webpack']);

};