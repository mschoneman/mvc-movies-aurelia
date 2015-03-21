System.register(["./models/user-model"], function (_export) {
  var UserModel, _createClass, _classCallCheck, Login;

  return {
    setters: [function (_modelsUserModel) {
      UserModel = _modelsUserModel.UserModel;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Login = _export("Login", (function () {
        function Login(userModel) {
          _classCallCheck(this, Login);

          this.userModel = userModel;
          this.username = "test@example.com";
          this.password = "test";
        }

        _createClass(Login, {
          login: {
            value: function login() {
              this.userModel.currentUser = "monkey";
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [UserModel];
            }
          }
        });

        return Login;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxTQUFTLGlDQUVKLEtBQUs7Ozs7QUFGVixlQUFTLG9CQUFULFNBQVM7Ozs7Ozs7OztBQUVKLFdBQUs7QUFLTCxpQkFMQSxLQUFLLENBS0osU0FBUyxFQUNyQjtnQ0FOVyxLQUFLOztBQU9kLGNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLGNBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWtCLENBQUM7QUFDbkMsY0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7U0FDeEI7O3FCQVZVLEtBQUs7QUFZaEIsZUFBSzttQkFBQSxpQkFDTDtBQUNFLGtCQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7YUFDdkM7OztBQWRNLGdCQUFNO21CQUFBLGtCQUNiO0FBQ0UscUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNwQjs7OztlQUpVLEtBQUsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==