/*!*
 * @file angular-initial-value.js
 * @version 1.0.3
 * @author Andrew Barton <ajbarton@users.sf.net>
 * @copyright © 2015 Andrew Barton
 */
angular.module('initialValue', [])
  .directive('initialValue', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function (scope, element, attrs, controller) {
        if (controller) {
          controller.$setViewValue(element.val());
        } else if ('ngBind' in attrs) {
          var getter = $parse(attrs['ngBind']),
              setter = getter.assign;
          setter(scope, attrs['content'] || element.text());
        }
      }
    };
  }]);
