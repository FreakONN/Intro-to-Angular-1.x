//we used the forecast service to fetch data from the server
//First we added forecast into MainController as a dependency so that it's available to use. 
//Then within the controller we used forecast to asynchronously fetch the weather data from the server and store it into $scope.fiveDay
app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) { 
    forecast.success(function(data) { 
    $scope.fiveDay = data; 
  });
}]);

/*Controller example
app.controller('personCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    
    $scope.fullName = function() {
    return $scope.firstName + " " + $scope.lastName;
    };
});
*/