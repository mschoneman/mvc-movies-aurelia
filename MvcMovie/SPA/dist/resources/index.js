System.register(["./date-format", "./number-format"], function (_export) {
  var DateFormatValueConverter, NumberFormatValueConverter;

  _export("install", install);

  function install(aurelia) {
    // register the value converters globally.
    aurelia.withResources(DateFormatValueConverter, NumberFormatValueConverter);
  }

  return {
    setters: [function (_dateFormat) {
      DateFormatValueConverter = _dateFormat.DateFormatValueConverter;
    }, function (_numberFormat) {
      NumberFormatValueConverter = _numberFormat.NumberFormatValueConverter;
    }],
    execute: function () {
      "use strict";
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsd0JBQXdCLEVBQ3hCLDBCQUEwQjs7cUJBRWxCLE9BQU87O0FBQWhCLFdBQVMsT0FBTyxDQUFDLE9BQU8sRUFBRTs7QUFFL0IsV0FBTyxDQUFDLGFBQWEsQ0FDbkIsd0JBQXdCLEVBQ3hCLDBCQUEwQixDQUFDLENBQUM7R0FDL0I7Ozs7QUFSTyw4QkFBd0IsZUFBeEIsd0JBQXdCOztBQUN4QixnQ0FBMEIsaUJBQTFCLDBCQUEwQiIsImZpbGUiOiJyZXNvdXJjZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==