module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: ['dist/'],
      module: ['node_modules/']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('clear-dist', ['clean:dist']);
  grunt.registerTask('clear-module', ['clean:module']);
  grunt.registerTask('clear-all', ['clean']);

};