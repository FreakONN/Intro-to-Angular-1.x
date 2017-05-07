//sve pod [] je depnedency,..npr. ["ngRoute"]

app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
}]);
