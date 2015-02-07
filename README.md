angular-initial-value
=====================

The `initial-value` directive allows you to initialize your controller's `$scope` with data from an existing DOM element.

Usage
-----

Load the module in your application:

    var app = angular.module('myApp', ['initialValue']);

Add the `initial-value` attribute to your elements:

    <form ng-controller="SomeController">
      <span ng-bind="person.name" initial-value>Jack</span>
      <meta ng-bind="person.email" itemprop="email" content="jack@example.com" initial-value>
      <input ng-model="person.address" type="text" value="123 Main St" initial-value>
    </form>
    
When AngularJS is finished compiling your application, the `$scope` variable will be automatically initialized with the appropriate values:

    app.controller('SomeController', ['$scope', '$timeout', function ($scope, $timeout) {
      $scope.person = {};
      $timeout(function () {
        console.log($scope.person.name);    // "Jack"
        console.log($scope.person.email);   // "jack@example.com"
        console.log($scope.person.address); // "123 Main St"
      });
    }]);

It supports the most common inputs like `text`, `email`, `tel`, `color`, `range`, `search`, `url`, `password`, `select`, `textarea`, and `hidden`.

Related projects
----------------

This project is based on the original [angular-initial-value](https://github.com/glaucocustodio/angular-initial-value) project by [Glauco Custódio](https://github.com/glaucocustodio).

There is also a project called [angular-auto-value](https://github.com/johngeorgewright/angular-auto-value) by [John Wright](https://github.com/johngeorgewright) which attempts to address the same issue.
