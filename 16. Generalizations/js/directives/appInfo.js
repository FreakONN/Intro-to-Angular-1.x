/*AngularJS:  
lets you extend HTML with new attributes called Directives.
has a set of built-in directives which offers functionality to your applications.
also lets you define your own directives.*/

/*New directives are created by using the .directive function.
To invoke the new directive, make an HTML element with the same tag name as the new directive.
When naming a directive, you must use a camel case name, w3TestDirective, 
but when invoking it, you must use - separated name, w3-test-directive*/


/*
//Example
<body ng-app="myApp">

<w3-test-directive></w3-test-directive>

<script>
var app = angular.module("myApp", []);
app.directive("w3TestDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});
</script>

</body>
*/

/*You can invoke a directive by using:Element name, Attribute, Class, Comment*/
/*Restrictions
You can restrict your directives to only be invoked by some of the methods.
Example:
By adding a restrict property with the value "A", the directive can only be invoked by attributes:

var app = angular.module("myApp", []);
app.directive("w3TestDirective", function() {
    return {
        restrict : "A",
        template : "<h1>Made by a directive!</h1>"
    };
});
The legal restrict values are:
    E for Element name
    A for Attribute
    C for Class
    M for Comment
By default the value is EA, meaning that both Element names and attribute names can invoke the directive.
*/
app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    //objašnjenje: https://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-2-isolate-scope
    //local scope
    // '=' označava da je potreban two-way binding,
    //ako se view ili model promijeni,...promijene se u isto vrijeme da reflektiraju promijene
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
});