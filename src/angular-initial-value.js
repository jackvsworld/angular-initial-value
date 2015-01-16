angular.module("initialValue", [])
  .directive("initialValue", [function () {
    return {
      restrict: "A",
      require: "ngModel",
      link: function (scope, element, attrs, ngModel) {
        ngModel.$setViewValue(attrs.value);
      }
    };
  }]);
