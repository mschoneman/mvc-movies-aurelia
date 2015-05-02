System.register(["./models/user-model"], function (_export) {
  var UserModel, _prototypeProperties, _classCallCheck, Login;

  return {
    setters: [function (_modelsUserModel) {
      UserModel = _modelsUserModel.UserModel;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Login = _export("Login", (function () {
        function Login(userModel) {
          _classCallCheck(this, Login);

          this.userModel = userModel;
          this.username = "test@example.com";
          this.password = "test";
        }

        _prototypeProperties(Login, {
          inject: {
            value: function inject() {
              return [UserModel];
            },
            writable: true,
            configurable: true
          }
        }, {
          login: {
            value: function login() {
              var _this = this;

              setTimeout(function () {
                _this.userModel.currentUser = "monkey";
              }, 500);
            },
            writable: true,
            configurable: true
          }
        });

        return Login;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxTQUFTLHlDQUVKLEtBQUs7Ozs7QUFGVixlQUFTLG9CQUFULFNBQVM7Ozs7Ozs7OztBQUVKLFdBQUs7QUFLTCxpQkFMQSxLQUFLLENBS0osU0FBUztnQ0FMVixLQUFLOztBQU9kLGNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLGNBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWtCLENBQUM7QUFDbkMsY0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7U0FDeEI7OzZCQVZVLEtBQUs7QUFDVCxnQkFBTTttQkFBQSxrQkFDYjtBQUNFLHFCQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDcEI7Ozs7O0FBUUQsZUFBSzttQkFBQSxpQkFDTDs7O0FBQ0Esd0JBQVUsQ0FBQyxZQUFJO0FBQUMsc0JBQUssU0FBUyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7ZUFBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRTVEOzs7Ozs7ZUFoQlUsS0FBSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9