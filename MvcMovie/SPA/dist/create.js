System.register(["aurelia-router", "aurelia-framework", "./models/movies-data-model"], function (_export) {
  var Router, LogManager, MoviesDataModel, _createClass, _classCallCheck, logger, Movies;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_modelsMoviesDataModel) {
      MoviesDataModel = _modelsMoviesDataModel.MoviesDataModel;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      logger = LogManager.getLogger("create-vm");
      Movies = _export("Movies", (function () {
        function Movies(router, moviesDataModel) {
          _classCallCheck(this, Movies);

          this.theRouter = router;
          this.moviesDataModel = moviesDataModel;
          this.movie = this.moviesDataModel.createMovie({
            Title: "Ghotst Busters III",
            Genre: "Comedy",
            Price: 3.99,
            ReleaseDate: new Date(),
            Rating: "G"
          });
        }

        _createClass(Movies, {
          create: {
            value: function create() {
              var _this = this;

              this.moviesDataModel.saveChanges().then(function () {
                logger.info("Successfully saved changes");
                _this.theRouter.navigate("movies");
              });
            }
          },
          deactivate: {
            value: function deactivate() {
              logger.info("Leaving create");
              if (this.movie.entityAspect.entityState.isAddedModifiedOrDeleted()) {
                logger.info("Rejecting pending changes");
                this.movie.entityAspect.rejectChanges();
              }
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [Router, MoviesDataModel];
            }
          }
        });

        return Movies;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNOLFVBQVUsRUFDVixlQUFlLGlDQUVuQixNQUFNLEVBRUcsTUFBTTs7OztBQU5YLFlBQU0sa0JBQU4sTUFBTTs7QUFDTixnQkFBVSxxQkFBVixVQUFVOztBQUNWLHFCQUFlLDBCQUFmLGVBQWU7Ozs7Ozs7OztBQUVuQixZQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFFakMsWUFBTTtBQU1OLGlCQU5BLE1BQU0sQ0FNTCxNQUFNLEVBQUUsZUFBZSxFQUNuQztnQ0FQVyxNQUFNOztBQVFmLGNBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLGNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDRSxpQkFBSyxFQUFFLG9CQUFvQjtBQUMzQixpQkFBSyxFQUFFLFFBQVE7QUFDZixpQkFBSyxFQUFFLElBQUk7QUFDWCx1QkFBVyxFQUFFLElBQUksSUFBSSxFQUFFO0FBQ3ZCLGtCQUFNLEVBQUUsR0FBRztXQUNaLENBQUMsQ0FBQztTQUNsRDs7cUJBakJVLE1BQU07QUFtQmpCLGdCQUFNO21CQUFBLGtCQUNOOzs7QUFDRSxrQkFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FDL0IsSUFBSSxDQUFDLFlBQ0E7QUFDRSxzQkFBTSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQzFDLHNCQUFLLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7ZUFDbkMsQ0FBQyxDQUFDO2FBQ1o7O0FBRUQsb0JBQVU7bUJBQUEsc0JBQ1Y7QUFDRSxvQkFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzlCLGtCQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxFQUNsRTtBQUNFLHNCQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDekMsb0JBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO2VBQ3pDO2FBQ0Y7OztBQXBDTSxnQkFBTTttQkFBQSxrQkFDYjtBQUNFLHFCQUFPLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2FBQ2xDOzs7O2VBSlUsTUFBTSIsImZpbGUiOiJjcmVhdGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==