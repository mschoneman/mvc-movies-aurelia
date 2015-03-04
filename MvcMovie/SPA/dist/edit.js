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

      logger = LogManager.getLogger("edit-vm");
      Movies = _export("Movies", (function () {
        function Movies(router, moviesDataModel) {
          _classCallCheck(this, Movies);

          logger.info("constructing edit");
          this.theRouter = router;
          this.moviesDataModel = moviesDataModel;
          this.movie = null;
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
          save: {
            value: function save() {
              var _this = this;

              this.moviesDataModel.saveChanges().then(function () {
                logger.info("Successfully saved changes");
                _this.theRouter.navigate("movies");
              });
            },
            writable: true,
            configurable: true
          },
          activate: {
            value: function activate(params, qs, config) {
              var _this = this;

              logger.info("activating edit");
              return this.moviesDataModel.getMovieByID(params.id).then(function (data) {
                logger.info("got results");
                _this.movie = data.results[0];
              });
            },
            writable: true,
            configurable: true
          },
          deactivate: {
            value: function deactivate() {
              logger.info("Leaving edit");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLE1BQU0sRUFDTixVQUFVLEVBQ1YsZUFBZSx5Q0FFbkIsTUFBTSxFQUVHLE1BQU07Ozs7QUFOWCxZQUFNLGtCQUFOLE1BQU07O0FBQ04sZ0JBQVUscUJBQVYsVUFBVTs7QUFDVixxQkFBZSwwQkFBZixlQUFlOzs7Ozs7Ozs7QUFFbkIsWUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBRS9CLFlBQU07QUFNTixpQkFOQSxNQUFNLENBTUwsTUFBTSxFQUFFLGVBQWU7Z0NBTnhCLE1BQU07O0FBUWYsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNqQyxjQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN4QixjQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN2QyxjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjs7NkJBWlUsTUFBTTtBQUNWLGdCQUFNO21CQUFBLGtCQUNiO0FBQ0UscUJBQU8sQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7YUFDbEM7Ozs7O0FBVUQsY0FBSTttQkFBQSxnQkFDSjs7O0FBQ0Usa0JBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQy9CLElBQUksQ0FBQyxZQUNBO0FBQ0Usc0JBQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUMxQyxzQkFBSyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2VBQ25DLENBQUMsQ0FBQzthQUNaOzs7O0FBR0Qsa0JBQVE7bUJBQUEsa0JBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQzNCOzs7QUFDRSxvQkFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQy9CLHFCQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FDaEQsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUNKO0FBQ0Usc0JBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0Isc0JBQUssS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7ZUFDOUIsQ0FBQyxDQUFDO2FBQ1o7Ozs7QUFFRCxvQkFBVTttQkFBQSxzQkFDVjtBQUNFLG9CQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzVCLGtCQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxFQUNsRTtBQUNFLHNCQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDekMsb0JBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO2VBQ3pDO2FBQ0Y7Ozs7OztlQTVDVSxNQUFNIiwiZmlsZSI6ImVkaXQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==