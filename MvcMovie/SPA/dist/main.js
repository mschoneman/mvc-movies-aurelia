System.register(["aurelia-framework", "aurelia-logging-console"], function (_export) {
  var LogManager, ConsoleAppender;

  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator().plugin("aurelia-breeze").plugin("./resources/index");

    aurelia.start().then(function (a) {
      return a.setRoot("app", document.body);
    });
  }

  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }],
    execute: function () {
      "use strict";

      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.levels.debug);
    }
  };
});
// install our app's resources
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsRUFDVixlQUFlOzt1QkFLUCxTQUFTOztBQUFsQixXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQ2pDO0FBQ0UsV0FBTyxDQUFDLEdBQUcsQ0FDUixzQkFBc0IsRUFBRSxDQUN4QixnQkFBZ0IsRUFBRSxDQUNsQixNQUFNLEVBQUUsQ0FDUixlQUFlLEVBQUUsQ0FDakIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQ3hCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUM3Qjs7QUFFRCxXQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzthQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FBQSxDQUFDLENBQUM7R0FDNUQ7Ozs7QUFsQk8sZ0JBQVUscUJBQVYsVUFBVTs7QUFDVixxQkFBZSwwQkFBZixlQUFlOzs7OztBQUV2QixnQkFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDOUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=