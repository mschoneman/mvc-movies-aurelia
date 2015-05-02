System.register(["aurelia-framework", "./models/user-model"], function (_export) {
  var Behavior, UserModel, _prototypeProperties, _classCallCheck, NavBar;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_modelsUserModel) {
      UserModel = _modelsUserModel.UserModel;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavBar = _export("NavBar", (function () {
        function NavBar(userModel) {
          _classCallCheck(this, NavBar);

          this.userModel = userModel;
        }

        _prototypeProperties(NavBar, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [UserModel];
            },
            writable: true,
            configurable: true
          }
        });

        return NavBar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsRUFDUixTQUFTLHlDQUVKLE1BQU07Ozs7QUFIWCxjQUFRLHFCQUFSLFFBQVE7O0FBQ1IsZUFBUyxvQkFBVCxTQUFTOzs7Ozs7Ozs7QUFFSixZQUFNO0FBVU4saUJBVkEsTUFBTSxDQVVMLFNBQVM7Z0NBVlYsTUFBTTs7QUFXZixjQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUM1Qjs7NkJBWlUsTUFBTTtBQUVWLGtCQUFRO21CQUFBLG9CQUFHO0FBQ2hCLHFCQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDeEM7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUNkLHFCQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDcEI7Ozs7OztlQVJVLE1BQU0iLCJmaWxlIjoibmF2LWJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9