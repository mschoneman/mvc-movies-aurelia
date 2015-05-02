System.register(["aurelia-router", "bootstrap", "./models/user-model", "aurelia-framework"], function (_export) {
  var Router, bootstrap, UserModel, LogManager, _prototypeProperties, _classCallCheck, logger, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }, function (_modelsUserModel) {
      UserModel = _modelsUserModel.UserModel;
    }, function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      logger = LogManager.getLogger("app");
      App = _export("App", (function () {
        function App(router, userModel) {
          var _this = this;

          _classCallCheck(this, App);

          this.router = router;
          this.userModel = userModel;
          Object.observe(userModel, function (changes) {
            var rebuildNavRequired = false;
            changes.forEach(function (change, i) {

              if (change.type === "update" && change.name === "currentUser") {
                rebuildNavRequired = true;
              }

              if (rebuildNavRequired) {
                _this.buildRoutes();
                _this.router.navigate(_this.userModel.currentUser != null ? "/home" : "/login");
              }
            });
          });

          this.buildRoutes();
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router, UserModel];
            },
            writable: true,
            configurable: true
          }
        }, {
          buildRoutes: {
            value: function buildRoutes() {
              var _this = this;

              this.router.reset();
              this.router.configure(function (config) {
                if (_this.userModel.currentUser != null) {
                  config.title = "Logged In";
                  config.map([{ route: ["", "home"], moduleId: "welcome", nav: true, title: "Home" }, { route: "movies", moduleId: "movies", nav: true, title: "Movies" }, { route: "movies/create", moduleId: "create", nav: false, title: "Create" }, { route: "movies/details/:id", moduleId: "details", nav: false, title: "Details" }, { route: "movies/edit/:id", moduleId: "edit", nav: false, title: "Edit" }, { route: "movies/delete/:id", moduleId: "delete", nav: false, title: "Delete" }]);
                } else {
                  config.title = "Aurelia Movie";
                  config.map([{ route: ["", "login"], moduleId: "login", nav: false, title: "Login" }]);
                }
              });
              this.router.refreshNavigation();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNQLFNBQVMsRUFDUixTQUFTLEVBQ1QsVUFBVSx5Q0FFZCxNQUFNLEVBRUcsR0FBRzs7OztBQVBSLFlBQU0sa0JBQU4sTUFBTTs7QUFDUCxlQUFTOztBQUNSLGVBQVMsb0JBQVQsU0FBUzs7QUFDVCxnQkFBVSxxQkFBVixVQUFVOzs7Ozs7Ozs7QUFFZCxZQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFFM0IsU0FBRztBQU1ILGlCQU5BLEdBQUcsQ0FNRixNQUFNLEVBQUMsU0FBUzs7O2dDQU5qQixHQUFHOztBQVFaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLGdCQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxVQUFBLE9BQU8sRUFDaEM7QUFDRSxnQkFBSSxrQkFBa0IsR0FBRyxLQUFLLENBQUM7QUFDL0IsbUJBQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUN6Qjs7QUFFRSxrQkFBRyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFDNUQ7QUFDRSxrQ0FBa0IsR0FBRyxJQUFJLENBQUM7ZUFDM0I7O0FBRUQsa0JBQUcsa0JBQWtCLEVBQ3JCO0FBQ0Usc0JBQUssV0FBVyxFQUFFLENBQUM7QUFDbkIsc0JBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFLLFNBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUUsQ0FBQztlQUNoRjthQUNGLENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQzs7QUFFSCxjQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDckI7OzZCQTlCVyxHQUFHO0FBQ1AsZ0JBQU07bUJBQUEsa0JBQ2I7QUFDRSxxQkFBTyxDQUFDLE1BQU0sRUFBQyxTQUFTLENBQUMsQ0FBQzthQUMzQjs7Ozs7QUE0QkQscUJBQVc7bUJBQUEsdUJBQ1g7OztBQUNFLGtCQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BCLGtCQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFDNUI7QUFDRSxvQkFBRyxNQUFLLFNBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxFQUNyQztBQUNFLHdCQUFNLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztBQUMzQix3QkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLEVBQ3BFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxFQUNqRSxFQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDekUsRUFBQyxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDaEYsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsRUFDdkUsRUFBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsQ0FDOUUsQ0FBQyxDQUFDO2lCQUNKLE1BRUQ7QUFDRSx3QkFBTSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7QUFDL0Isd0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUNyRSxDQUFDLENBQUM7aUJBQ0o7ZUFDRixDQUFDLENBQUM7QUFDSCxrQkFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ2pDOzs7Ozs7ZUExRFUsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==