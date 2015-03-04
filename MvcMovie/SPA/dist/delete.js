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

      logger = LogManager.getLogger("details-vm");
      Movies = _export("Movies", (function () {
        function Movies(router, moviesDataModel) {
          _classCallCheck(this, Movies);

          logger.info("constructing details");
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
          "delete": {
            value: function _delete() {
              var _this = this;

              this.movie.entityAspect.setDeleted();
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

              logger.info("activating details");
              return this.moviesDataModel.getMovieByID(params.id).then(function (data) {
                logger.info("got results");
                _this.movie = data.results[0];
              });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNOLFVBQVUsRUFDVixlQUFlLHlDQUVuQixNQUFNLEVBRUcsTUFBTTs7OztBQU5YLFlBQU0sa0JBQU4sTUFBTTs7QUFDTixnQkFBVSxxQkFBVixVQUFVOztBQUNWLHFCQUFlLDBCQUFmLGVBQWU7Ozs7Ozs7OztBQUVuQixZQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFFbEMsWUFBTTtBQU1OLGlCQU5BLE1BQU0sQ0FNTCxNQUFNLEVBQUMsZUFBZTtnQ0FOdkIsTUFBTTs7QUFRZixnQkFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3BDLGNBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLGNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25COzs2QkFaVSxNQUFNO0FBQ1YsZ0JBQU07bUJBQUEsa0JBQ2I7QUFDRSxxQkFBTyxDQUFDLE1BQU0sRUFBQyxlQUFlLENBQUMsQ0FBQzthQUNqQzs7Ozs7O21CQVVLLG1CQUNOOzs7QUFDRSxrQkFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDckMsa0JBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQy9CLElBQUksQ0FBQyxZQUNBO0FBQ0Usc0JBQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUMxQyxzQkFBSyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2VBQ25DLENBQUMsQ0FBQzthQUNaOzs7O0FBRUQsa0JBQVE7bUJBQUEsa0JBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQzNCOzs7QUFDRSxvQkFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xDLHFCQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FDaEQsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUNKO0FBQ0Usc0JBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0Isc0JBQUssS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7ZUFDOUIsQ0FBQyxDQUFDO2FBQ1o7Ozs7OztlQWxDVSxNQUFNIiwiZmlsZSI6ImRlbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9