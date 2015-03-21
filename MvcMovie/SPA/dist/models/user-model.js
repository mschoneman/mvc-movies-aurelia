System.register(["aurelia-framework"], function (_export) {
  var LogManager, _classCallCheck, logger, UserModel;

  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      logger = LogManager.getLogger("user-model");
      UserModel = _export("UserModel", function UserModel() {
        _classCallCheck(this, UserModel);

        this.currentUser = null;
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy91c2VyLW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxVQUFVLG1CQUVkLE1BQU0sRUFFRyxTQUFTOzs7O0FBSmQsZ0JBQVUscUJBQVYsVUFBVTs7Ozs7OztBQUVkLFlBQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztBQUVsQyxlQUFTLHdCQUVULFNBRkEsU0FBUyxHQUdwQjs4QkFIVyxTQUFTOztBQUlsQixZQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztPQUN6QiIsImZpbGUiOiJtb2RlbHMvdXNlci1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9