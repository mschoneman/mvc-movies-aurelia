System.register(["moment"], function (_export) {
  var moment, _prototypeProperties, _classCallCheck, DateFormatValueConverter;

  return {
    setters: [function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      DateFormatValueConverter = _export("DateFormatValueConverter", (function () {
        function DateFormatValueConverter() {
          _classCallCheck(this, DateFormatValueConverter);
        }

        _prototypeProperties(DateFormatValueConverter, null, {
          toView: {
            value: function toView(value, format) {
              return moment(value).format(format);
            },
            writable: true,
            configurable: true
          },
          fromView: {
            value: function fromView(value) {
              return moment(value).toISOString();
            },
            writable: true,
            configurable: true
          }
        });

        return DateFormatValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9kYXRlLWZvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQU8sTUFBTSx5Q0FFQSx3QkFBd0I7Ozs7QUFGOUIsWUFBTTs7Ozs7Ozs7O0FBRUEsOEJBQXdCO2lCQUF4Qix3QkFBd0I7Z0NBQXhCLHdCQUF3Qjs7OzZCQUF4Qix3QkFBd0I7QUFFbkMsZ0JBQU07bUJBQUEsZ0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFDcEI7QUFDRSxxQkFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JDOzs7O0FBRUQsa0JBQVE7bUJBQUEsa0JBQUMsS0FBSyxFQUNkO0FBQ0UscUJBQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BDOzs7Ozs7ZUFWVSx3QkFBd0IiLCJmaWxlIjoicmVzb3VyY2VzL2RhdGUtZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=