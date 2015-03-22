System.register(["aurelia-framework", "./models/user-model"], function (_export) {
  var Behavior, UserModel, _createClass, _classCallCheck, NavBar;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_modelsUserModel) {
      UserModel = _modelsUserModel.UserModel;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavBar = _export("NavBar", (function () {
        function NavBar(userModel) {
          _classCallCheck(this, NavBar);

          this.userModel = userModel;
        }

        _createClass(NavBar, null, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router");
            }
          },
          inject: {
            value: function inject() {
              return [UserModel];
            }
          }
        });

        return NavBar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsRUFDUixTQUFTLGlDQUVKLE1BQU07Ozs7QUFIWCxjQUFRLHFCQUFSLFFBQVE7O0FBQ1IsZUFBUyxvQkFBVCxTQUFTOzs7Ozs7Ozs7QUFFSixZQUFNO0FBVU4saUJBVkEsTUFBTSxDQVVMLFNBQVMsRUFBRTtnQ0FWWixNQUFNOztBQVdmLGNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzVCOztxQkFaVSxNQUFNO0FBRVYsa0JBQVE7bUJBQUEsb0JBQUc7QUFDaEIscUJBQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4Qzs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUNkLHFCQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDcEI7Ozs7ZUFSVSxNQUFNIiwiZmlsZSI6Im5hdi1iYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==