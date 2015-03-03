System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia";
            config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "movies", moduleId: "movies", nav: true, title: "Movies" }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUVELEdBQUc7OztBQUZSLFlBQU0sa0JBQU4sTUFBTTs7Ozs7OztBQUVELFNBQUc7QUFNSCxpQkFOQSxHQUFHLENBTUYsTUFBTTtnQ0FOUCxHQUFHOztBQVFaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUNOO0FBQ0Usa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ0UsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDMUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLENBQ2xFLENBQUMsQ0FBQztXQUNmLENBQUMsQ0FBQztTQUMxQjs7NkJBakJVLEdBQUc7QUFDUCxnQkFBTTttQkFBQSxrQkFDYjtBQUNFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakI7Ozs7OztlQUpVLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=