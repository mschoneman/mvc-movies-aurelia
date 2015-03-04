System.register(["aurelia-framework", "./models/movies-data-model"], function (_export) {
  var LogManager, MoviesDataModel, _prototypeProperties, _classCallCheck, logger, Movies;

  return {
    setters: [function (_aureliaFramework) {
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
        function Movies(moviesDataModel) {
          _classCallCheck(this, Movies);

          logger.info("constructing details");
          this.moviesDataModel = moviesDataModel;
          this.movie = null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsRUFDVixlQUFlLHlDQUVuQixNQUFNLEVBRUcsTUFBTTs7OztBQUxYLGdCQUFVLHFCQUFWLFVBQVU7O0FBQ1YscUJBQWUsMEJBQWYsZUFBZTs7Ozs7Ozs7O0FBRW5CLFlBQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztBQUVsQyxZQUFNO0FBTU4saUJBTkEsTUFBTSxDQU1MLGVBQWU7Z0NBTmhCLE1BQU07O0FBUWYsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNwQyxjQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN2QyxjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjs7NkJBWFUsTUFBTTtBQUNWLGdCQUFNO21CQUFBLGtCQUNiO0FBQ0UscUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUMxQjs7Ozs7QUFTRCxrQkFBUTttQkFBQSxrQkFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFDM0I7OztBQUNFLG9CQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDbEMscUJBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUNoRCxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQ0o7QUFDRSxzQkFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzQixzQkFBSyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztlQUM5QixDQUFDLENBQUM7YUFDWjs7Ozs7O2VBdEJVLE1BQU0iLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9