System.register(["aurelia-router", "bootstrap"], function (_export) {
  var Router, bootstrap, _prototypeProperties, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia Movie";
            config.map([{ route: [""], moduleId: "welcome", nav: true, title: "Home" }, { route: "movies", moduleId: "movies", nav: true, title: "Movies" }, { route: "movies/create", moduleId: "create", nav: false, title: "Create" }, { route: "movies/details/:id", moduleId: "details", nav: false, title: "Details" }, { route: "movies/edit/:id", moduleId: "edit", nav: false, title: "Edit" }, { route: "movies/delete/:id", moduleId: "delete", nav: false, title: "Delete" }]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNQLFNBQVMseUNBRUgsR0FBRzs7OztBQUhSLFlBQU0sa0JBQU4sTUFBTTs7QUFDUCxlQUFTOzs7Ozs7Ozs7QUFFSCxTQUFHO0FBTUgsaUJBTkEsR0FBRyxDQU1GLE1BQU07Z0NBTlAsR0FBRzs7QUFRWixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFDTjtBQUNFLGtCQUFNLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztBQUMvQixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsRUFDNUQsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLEVBQ2pFLEVBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxFQUN6RSxFQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxFQUNoRixFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxFQUN2RSxFQUFDLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUM5RSxDQUFDLENBQUM7V0FDZixDQUFDLENBQUM7U0FDMUI7OzZCQXJCVSxHQUFHO0FBQ1AsZ0JBQU07bUJBQUEsa0JBQ2I7QUFDRSxxQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2pCOzs7Ozs7ZUFKVSxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9