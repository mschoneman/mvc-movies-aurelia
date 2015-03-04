System.register(["aurelia-framework", "moment"], function (_export) {
  var LogManager, moment, _prototypeProperties, _classCallCheck, logger, DateFormatValueConverter;

  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      logger = LogManager.getLogger("dateformat");
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
            value: function fromView(value, format) {
              logger.info("value" + value);
              logger.info("format" + format);
              return value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9kYXRlLWZvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxFQUNYLE1BQU0seUNBRVQsTUFBTSxFQUVHLHdCQUF3Qjs7OztBQUw3QixnQkFBVSxxQkFBVixVQUFVOztBQUNYLFlBQU07Ozs7Ozs7OztBQUVULFlBQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztBQUVsQyw4QkFBd0I7aUJBQXhCLHdCQUF3QjtnQ0FBeEIsd0JBQXdCOzs7NkJBQXhCLHdCQUF3QjtBQUVuQyxnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUNwQjtBQUNFLHFCQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7Ozs7QUFDRCxrQkFBUTttQkFBQSxrQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUN0QjtBQUNFLG9CQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztBQUM3QixvQkFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFDL0IscUJBQU8sS0FBSyxDQUFDO2FBQ2Q7Ozs7OztlQVhVLHdCQUF3QiIsImZpbGUiOiJyZXNvdXJjZXMvZGF0ZS1mb3JtYXQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==