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

      logger = LogManager.getLogger("movies-vm");
      Movies = _export("Movies", (function () {
        function Movies(theRouter, moviesDataModel) {
          _classCallCheck(this, Movies);

          this.theRouter = theRouter;
          this.moviesDataModel = moviesDataModel;
          this.items = [];
          this.genres = [];
          this.heading = "MVC Movies Aurelia Index";
          this.selectedGenre = "";
          this.searchString = "";
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
          filter: {
            value: function filter() {
              this.getMovies();
            },
            writable: true,
            configurable: true
          },
          createNew: {
            value: function createNew() {
              logger.info("createNew called");
              this.theRouter.navigate("movies/create");
            },
            writable: true,
            configurable: true
          },
          details: {
            value: function details(movie) {
              this.theRouter.navigate("movies/details/" + movie.ID);
            },
            writable: true,
            configurable: true
          },
          edit: {
            value: function edit() {},
            writable: true,
            configurable: true
          },
          "delete": {
            value: function _delete() {},
            writable: true,
            configurable: true
          },
          getMovies: {
            value: function getMovies() {
              var _this = this;

              return this.moviesDataModel.getMovies().then(function (data) {
                logger.info("Fetched Movies");
                _this.items = data.results;
                if (_this.genres.length == 0) {
                  _this.genres = _this.items.map(function (element) {
                    return element.Genre;
                  }).filter(function (element, index, array) {
                    return array.indexOf(element) == index;
                  }).sort();
                }
                logger.info("items.length = " + _this.items.length);
                logger.info("genres.length = " + _this.genres.length);

                logger.info("selectedGenre = " + _this.selectedGenre);
                logger.info("searchString = " + _this.searchString);

                _this.items = _this.items.filter(function (element, index, array) {
                  if (_this.selectedGenre != "") {
                    if (element.Genre == null) return false;
                    if (element.Genre != _this.selectedGenre) return false;
                  }

                  if (_this.searchString != "") {
                    if (element.Title == null) return false;
                    if (element.Title.indexOf(_this.searchString) == -1) return false;
                  }

                  return true;
                });
                logger.info("filtered items.length = " + _this.items.length);
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
//# sourceMappingURL=data:application/json;base64,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