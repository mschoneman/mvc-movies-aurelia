System.register([], function (_export) {
  var _createClass, _classCallCheck, Welcome, UpperValueConverter;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Welcome = _export("Welcome", (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = "Welcome to the Aurelia Navigation App!";
          this.firstName = "John";
          this.lastName = "Doe";
        }

        _createClass(Welcome, {
          fullName: {
            get: function () {
              return "" + this.firstName + " " + this.lastName;
            }
          },
          welcome: {
            value: function welcome() {
              alert("Welcome, " + this.fullName + "!");
            }
          }
        });

        return Welcome;
      })());
      UpperValueConverter = _export("UpperValueConverter", (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, {
          toView: {
            value: function toView(value) {
              return value && value.toUpperCase();
            }
          }
        });

        return UpperValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FBYSxPQUFPLEVBZ0JQLG1CQUFtQjs7Ozs7Ozs7Ozs7QUFoQm5CLGFBQU87QUFDUCxpQkFEQSxPQUFPLEdBQ0w7Z0NBREYsT0FBTzs7QUFFaEIsY0FBSSxDQUFDLE9BQU8sR0FBRyx3Q0FBd0MsQ0FBQztBQUN4RCxjQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN4QixjQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2Qjs7cUJBTFUsT0FBTztBQU9kLGtCQUFRO2lCQUFBLFlBQUU7QUFDWiwwQkFBVSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUc7YUFDN0M7O0FBRUQsaUJBQU87bUJBQUEsbUJBQUU7QUFDUCxtQkFBSyxlQUFhLElBQUksQ0FBQyxRQUFRLE9BQUksQ0FBQzthQUNyQzs7OztlQWJVLE9BQU87O0FBZ0JQLHlCQUFtQjtpQkFBbkIsbUJBQW1CO2dDQUFuQixtQkFBbUI7OztxQkFBbkIsbUJBQW1CO0FBQzlCLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBQztBQUNYLHFCQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDckM7Ozs7ZUFIVSxtQkFBbUIiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9