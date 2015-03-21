System.register(["numeral"], function (_export) {
  var numeral, _createClass, _classCallCheck, NumberFormatValueConverter;

  return {
    setters: [function (_numeral) {
      numeral = _numeral["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NumberFormatValueConverter = _export("NumberFormatValueConverter", (function () {
        function NumberFormatValueConverter() {
          _classCallCheck(this, NumberFormatValueConverter);
        }

        _createClass(NumberFormatValueConverter, {
          toView: {
            value: function toView(value, format) {
              return numeral(value).format(format);
            }
          }
        });

        return NumberFormatValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9udW1iZXItZm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBTyxPQUFPLGlDQUVELDBCQUEwQjs7OztBQUZoQyxhQUFPOzs7Ozs7Ozs7QUFFRCxnQ0FBMEI7aUJBQTFCLDBCQUEwQjtnQ0FBMUIsMEJBQTBCOzs7cUJBQTFCLDBCQUEwQjtBQUNyQyxnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLHFCQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdEM7Ozs7ZUFIVSwwQkFBMEIiLCJmaWxlIjoicmVzb3VyY2VzL251bWJlci1mb3JtYXQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==