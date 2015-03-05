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
              logger.info("toView value: " + value);
              logger.info("toView format" + format);
              return moment(value).format(format);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9kYXRlLWZvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxFQUNYLE1BQU0seUNBRVQsTUFBTSxFQUVHLHdCQUF3Qjs7OztBQUw3QixnQkFBVSxxQkFBVixVQUFVOztBQUNYLFlBQU07Ozs7Ozs7OztBQUVULFlBQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztBQUVsQyw4QkFBd0I7aUJBQXhCLHdCQUF3QjtnQ0FBeEIsd0JBQXdCOzs7NkJBQXhCLHdCQUF3QjtBQUVuQyxnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUNwQjtBQUNFLG9CQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLG9CQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUN0QyxxQkFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JDOzs7Ozs7ZUFQVSx3QkFBd0IiLCJmaWxlIjoicmVzb3VyY2VzL2RhdGUtZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=