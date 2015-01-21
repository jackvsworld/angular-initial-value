/*!*
 * @file angular-initial-value.js
 * @version 1.0.0
 * @author Andrew Barton <andrew@smithcart.com>
 * @copyright © 2015 Andrew Barton
 */
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
