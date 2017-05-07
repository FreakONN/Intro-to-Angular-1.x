//The forecast service needs to use AngularJS's built-in $http to fetch JSON from the server
//we add $http to the forecast service as a dependency
//Now $http is available to use inside forecast
app.factory('forecast', ['$http', function($http) { 
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
