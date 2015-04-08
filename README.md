angular-initial-value
=====================

The `initial-value` directive allows you to initialize your `ngModel` with data from an existing DOM element.

Usage
-----

Load the module in your application:

    var app = angular.module('myApp', ['initialValue']);

Add the `initial-value` attribute to your form fields:

    <form ng-controller="myController">
      <input type="text" value="Jack" ng-model="person.name" initial-value>
    </form>
    
When AngularJS is finished compiling your application, the `$scope` variable will be automatically initialized with the field values:

    app.controller('myController', ['$scope', '$timeout', function ($scope, $timeout) {
      $scope.person = {};
      $timeout(function () {
        console.log($scope.person.name); // "Jack"
      });
    }]);

It supports the most common inputs like `text`, `email`, `tel`, `color`, `range`, `search`, `url`, `password`, `select`, `textarea`, and `hidden`.

Related projects
----------------

This project is based on the original [angular-initial-value](https://github.com/glaucocustodio/angular-initial-value) project by [Glauco Custódio](https://github.com/glaucocustodio).

There is also a project called [angular-auto-value](https://github.com/johngeorgewright/angular-auto-value) by [John Wright](https://github.com/johngeorgewright) which attempts to address the same issue.
