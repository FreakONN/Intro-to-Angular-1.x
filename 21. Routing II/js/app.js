/*Opis:
AngularJS extends HTML with ng-directives.
The ng-app directive defines an AngularJS application.
The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
The ng-bind directive binds application data to the HTML view. 
*/

//myApp je novi modul (new module)
//modul sadrži različite komponente angularjs app-a
var app = angular.module('GalleryApp', ['ngRoute']); //ngRoute moramo dodati u dependency arra

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "views/home.html"
    })
    /*we have defined a route for our PhotoController. The :id is the route parameter, 
    it means that URL https://localhost/#/photos/3 will take us to the PhotoController with $routeParams.id equal to 3 
    (value from the URL).*/
    .when('/photos/:id', { //:id predstavlja broj slike ie. https://localhost/#/photos/:id
      controller: 'PhotoController',  //url se prosljeđuje kontroleru koji popunjava https://localhost/# 
      templateUrl: 'views/photo.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
