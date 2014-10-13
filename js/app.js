(function(){
  "use strict";

  angular.module('Bookmarks', [
  ])

  .controller('MainController', function($scope){
    $scope.name = 'Edgard'
    $scope.categories = ['HTML5', 'JavaScript', 'CSS', 'Games']
    $scope.bookmarks = [
      {id:1, name:'quizzpot.com', url:'https://quizzpot.com', category:'JavaScript'},
      {id:2, name:'HTML5 Games', url:'https://html5gamedevs.com', category:'Games'},
      {id:3, name:'CSS Tricks', url:'http://css-tricks.com', category:'CSS'},
      {id:4, name:'Bootstrap', url:'http://getbootstrap.com', category:'CSS'}
    ]
  });


})();
