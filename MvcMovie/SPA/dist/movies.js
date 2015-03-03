System.register(["aurelia-framework", "./models/movies-data-model"], function (_export) {
  "use strict";

  var LogManager, MoviesDataModel, _prototypeProperties, _classCallCheck, logger, Movies;
  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_modelsMoviesDataModel) {
      MoviesDataModel = _modelsMoviesDataModel.MoviesDataModel;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      logger = LogManager.getLogger("movies-vm");
      Movies = _export("Movies", (function () {
        function Movies(moviesDataModel) {
          _classCallCheck(this, Movies);

          this.moviesDataModel = moviesDataModel;
          this.items = [];
          this.heading = "MVC Movies Aurelia Index";
          this.newMovieTitle = "";
        }

        _prototypeProperties(Movies, {
          inject: {
            value: function inject() {
              return [MoviesDataModel];
            },
            writable: true,
            configurable: true
          }
        }, {
          getMovies: {
            value: function getMovies() {
              var _this = this;
              return this.moviesDataModel.getMovies().then(function (data) {
                logger.info("Fetched Movies");
                _this.items = data.results;
                logger.info("items.length = " + _this.items.length);
              })["catch"](function (error) {
                logger.error(error.message, "Query Failed");
              });
            },
            writable: true,
            configurable: true
          },
          activate: {
            value: function activate() {
              return this.getMovies();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxVQUFVLEVBQ1YsZUFBZSx5Q0FFbkIsTUFBTSxFQUVHLE1BQU07OztBQUxYLGdCQUFVLHFCQUFWLFVBQVU7O0FBQ1YscUJBQWUsMEJBQWYsZUFBZTs7Ozs7OztBQUVuQixZQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFFakMsWUFBTTtBQUdOLGlCQUhBLE1BQU0sQ0FHTCxlQUFlO2dDQUhoQixNQUFNOztBQUtmLGNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxPQUFPLEdBQUcsMEJBQTBCLENBQUM7QUFDMUMsY0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7U0FDekI7OzZCQVRVLE1BQU07QUFFVixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFTN0MsbUJBQVM7bUJBQUEscUJBQ1Q7O0FBQ0UscUJBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FDcEMsSUFBSSxDQUNILFVBQUEsSUFBSSxFQUNKO0FBQ0Usc0JBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QixzQkFBSyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUMxQixzQkFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtlQUNuRCxDQUFDLFNBQ0UsQ0FDSixVQUFBLEtBQUssRUFDTDtBQUNFLHNCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7ZUFDN0MsQ0FBQyxDQUFDO2FBQ1I7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFDUjtBQUNFLHFCQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN6Qjs7Ozs7O2VBL0JVLE1BQU0iLCJmaWxlIjoibW92aWVzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=