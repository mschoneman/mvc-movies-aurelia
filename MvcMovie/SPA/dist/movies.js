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

        _createClass(Movies, {
          filter: {
            value: function filter() {
              this.getMovies();
            }
          },
          createNew: {
            value: function createNew() {
              logger.info("createNew called");
              this.theRouter.navigate("movies/create");
            }
          },
          details: {
            value: function details(movie) {
              this.theRouter.navigate("movies/details/" + movie.ID);
            }
          },
          edit: {
            value: function edit() {}
          },
          "delete": {
            value: function _delete() {}
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
            }
          },
          activate: {
            value: function activate() {
              return this.getMovies();
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
//# sourceMappingURL=data:application/json;base64,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