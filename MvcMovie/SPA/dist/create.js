System.register(["aurelia-router", "aurelia-framework", "./models/movies-data-model"], function (_export) {
  var Router, LogManager, MoviesDataModel, _prototypeProperties, _classCallCheck, logger, Movies;

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

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

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

        _prototypeProperties(Movies, {
          inject: {
            value: function inject() {
              return [Router, MoviesDataModel];
            },
            writable: true,
            configurable: true
          }
        }, {
          create: {
            value: function create() {
              var _this = this;

              this.moviesDataModel.saveChanges().then(function () {
                logger.info("Successfully saved changes");
                _this.theRouter.navigate("movies");
              });
            },
            writable: true,
            configurable: true
          },
          deactivate: {
            value: function deactivate() {
              logger.info("Leaving create");
              if (this.movie.entityAspect.entityState.isAddedModifiedOrDeleted()) {
                logger.info("Rejecting pending changes");
                this.movie.entityAspect.rejectChanges();
              }
            },
            writable: true,
            configurable: true
          }
        });

        return Movies;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNOLFVBQVUsRUFDVixlQUFlLHlDQUVuQixNQUFNLEVBRUcsTUFBTTs7OztBQU5YLFlBQU0sa0JBQU4sTUFBTTs7QUFDTixnQkFBVSxxQkFBVixVQUFVOztBQUNWLHFCQUFlLDBCQUFmLGVBQWU7Ozs7Ozs7OztBQUVuQixZQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFFakMsWUFBTTtBQU1OLGlCQU5BLE1BQU0sQ0FNTCxNQUFNLEVBQUUsZUFBZTtnQ0FOeEIsTUFBTTs7QUFRZixjQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN4QixjQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN2QyxjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0FBQ0UsaUJBQUssRUFBRSxvQkFBb0I7QUFDM0IsaUJBQUssRUFBRSxRQUFRO0FBQ2YsaUJBQUssRUFBRSxJQUFJO0FBQ1gsdUJBQVcsRUFBRSxJQUFJLElBQUksRUFBRTtBQUN2QixrQkFBTSxFQUFFLEdBQUc7V0FDWixDQUFDLENBQUM7U0FDbEQ7OzZCQWpCVSxNQUFNO0FBQ1YsZ0JBQU07bUJBQUEsa0JBQ2I7QUFDRSxxQkFBTyxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQzthQUNsQzs7Ozs7QUFlRCxnQkFBTTttQkFBQSxrQkFDTjs7O0FBQ0Usa0JBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQy9CLElBQUksQ0FBQyxZQUNBO0FBQ0Usc0JBQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUMxQyxzQkFBSyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2VBQ25DLENBQUMsQ0FBQzthQUNaOzs7O0FBRUQsb0JBQVU7bUJBQUEsc0JBQ1Y7QUFDRSxvQkFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzlCLGtCQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxFQUNsRTtBQUNFLHNCQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDekMsb0JBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO2VBQ3pDO2FBQ0Y7Ozs7OztlQXJDVSxNQUFNIiwiZmlsZSI6ImNyZWF0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9