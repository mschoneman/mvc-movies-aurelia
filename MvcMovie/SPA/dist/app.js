System.register(["aurelia-router", "bootstrap", "./models/user-model", "aurelia-framework"], function (_export) {
  var Router, bootstrap, UserModel, LogManager, _createClass, _classCallCheck, logger, App;

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

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
                _this.router.navigate(_this.userModel.currentUser != null ? "home" : "login");
              }
            });
          });

          this.buildRoutes();
        }

        _createClass(App, {
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
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [Router, UserModel];
            }
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNQLFNBQVMsRUFDUixTQUFTLEVBQ1QsVUFBVSxpQ0FFZCxNQUFNLEVBRUcsR0FBRzs7OztBQVBSLFlBQU0sa0JBQU4sTUFBTTs7QUFDUCxlQUFTOztBQUNSLGVBQVMsb0JBQVQsU0FBUzs7QUFDVCxnQkFBVSxxQkFBVixVQUFVOzs7Ozs7Ozs7QUFFZCxZQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFFM0IsU0FBRztBQU1ILGlCQU5BLEdBQUcsQ0FNRixNQUFNLEVBQUMsU0FBUyxFQUM1Qjs7O2dDQVBXLEdBQUc7O0FBUVosY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0IsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLFVBQUEsT0FBTyxFQUNoQztBQUNFLGdCQUFJLGtCQUFrQixHQUFHLEtBQUssQ0FBQztBQUMvQixtQkFBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBQyxDQUFDLEVBQ3pCOztBQUVFLGtCQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUM1RDtBQUNFLGtDQUFrQixHQUFHLElBQUksQ0FBQztlQUMzQjs7QUFFRCxrQkFBRyxrQkFBa0IsRUFDckI7QUFDRSxzQkFBSyxXQUFXLEVBQUUsQ0FBQztBQUNuQixzQkFBSyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQUssU0FBUyxDQUFDLFdBQVcsSUFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBRSxDQUFDO2VBQzlFO2FBQ0YsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDOztBQUVILGNBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNyQjs7cUJBOUJXLEdBQUc7QUFnQ2QscUJBQVc7bUJBQUEsdUJBQ1g7OztBQUNFLGtCQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BCLGtCQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFDNUI7QUFDRSxvQkFBRyxNQUFLLFNBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxFQUNyQztBQUNFLHdCQUFNLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztBQUMzQix3QkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLEVBQ3BFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxFQUNqRSxFQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDekUsRUFBQyxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDaEYsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsRUFDdkUsRUFBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsQ0FDOUUsQ0FBQyxDQUFDO2lCQUNKLE1BRUQ7QUFDRSx3QkFBTSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7QUFDL0Isd0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUNyRSxDQUFDLENBQUM7aUJBQ0o7ZUFDRixDQUFDLENBQUM7QUFDSCxrQkFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ2pDOzs7QUF6RE0sZ0JBQU07bUJBQUEsa0JBQ2I7QUFDRSxxQkFBTyxDQUFDLE1BQU0sRUFBQyxTQUFTLENBQUMsQ0FBQzthQUMzQjs7OztlQUpVLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=