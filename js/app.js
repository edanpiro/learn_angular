(function(){
  "use strict";

  angular.module('Bookmarks', [
  ])

  .controller('MainController', function($scope){
    $scope.name = 'Edgard'
    $scope.categories = ['HTML5', 'JavaScript', 'CSS', 'Games']
  });


})();
