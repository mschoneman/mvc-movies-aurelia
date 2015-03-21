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
            logger.debug("usermodel observed");
            changes.forEach(function (change, i) {

              if (change.type === "update" && change.name === "currentUser") {
                logger.debug("matching change found");
                _this.router.reset();
                _this.router.configure(function (config) {
                  config.title = "Logged In";
                  config.map([{ route: ["", "home"], moduleId: "welcome", nav: true, title: "Home" }, { route: "movies", moduleId: "movies", nav: true, title: "Movies" }, { route: "movies/create", moduleId: "create", nav: false, title: "Create" }, { route: "movies/details/:id", moduleId: "details", nav: false, title: "Details" }, { route: "movies/edit/:id", moduleId: "edit", nav: false, title: "Edit" }, { route: "movies/delete/:id", moduleId: "delete", nav: false, title: "Delete" }]);
                });
                _this.router.refreshNavigation();
                _this.router.navigate("home");
              }
            });
          });
          this.router.configure(function (config) {
            config.title = "Aurelia Movie";
            config.map([{ route: [""], moduleId: "login", nav: false, title: "Login" }]);
          });
        }

        _createClass(App, null, {
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
//# sourceMappingURL=data:application/json;base64,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