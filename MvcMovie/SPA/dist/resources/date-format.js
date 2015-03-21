System.register(["moment"], function (_export) {
  var moment, _createClass, _classCallCheck, DateFormatValueConverter;

  return {
    setters: [function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      DateFormatValueConverter = _export("DateFormatValueConverter", (function () {
        function DateFormatValueConverter() {
          _classCallCheck(this, DateFormatValueConverter);
        }

        _createClass(DateFormatValueConverter, {
          toView: {
            value: function toView(value, format) {
              return moment(value).format(format);
            }
          },
          fromView: {
            value: function fromView(value) {
              return moment(value).toISOString();
            }
          }
        });

        return DateFormatValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9kYXRlLWZvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQU8sTUFBTSxpQ0FFQSx3QkFBd0I7Ozs7QUFGOUIsWUFBTTs7Ozs7Ozs7O0FBRUEsOEJBQXdCO2lCQUF4Qix3QkFBd0I7Z0NBQXhCLHdCQUF3Qjs7O3FCQUF4Qix3QkFBd0I7QUFFbkMsZ0JBQU07bUJBQUEsZ0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFDcEI7QUFDRSxxQkFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JDOztBQUVELGtCQUFRO21CQUFBLGtCQUFDLEtBQUssRUFDZDtBQUNFLHFCQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQzs7OztlQVZVLHdCQUF3QiIsImZpbGUiOiJyZXNvdXJjZXMvZGF0ZS1mb3JtYXQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==