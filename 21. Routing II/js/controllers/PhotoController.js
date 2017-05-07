/*Notice that we injected both $routeParams and the photos service into the PhotoController dependency array to make them available to use inside the controller.*/
app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  //jer je u photos.js-u definiran "data" moze se koristiti photos i data parametar
  photos.success(function(data) {
    //photo servis dohvaa slike sa servera te ih potom $routeParams.id dohvaa prema njihovom indexu
    $scope.detail = data[$routeParams.id]; //routeParams je ugraena f-ja
  });
}]);
