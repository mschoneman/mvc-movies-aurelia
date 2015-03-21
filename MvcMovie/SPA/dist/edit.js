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

      logger = LogManager.getLogger("edit-vm");
      Movies = _export("Movies", (function () {
        function Movies(router, moviesDataModel) {
          _classCallCheck(this, Movies);

          logger.info("constructing edit");
          this.theRouter = router;
          this.moviesDataModel = moviesDataModel;
          this.movie = null;
        }

        _createClass(Movies, {
          save: {
            value: function save() {
              var _this = this;

              this.moviesDataModel.saveChanges().then(function () {
                logger.info("Successfully saved changes");
                _this.theRouter.navigate("movies");
              })["catch"](function (error) {});
            }
          },
          activate: {
            value: function activate(params, qs, config) {
              var _this = this;

              logger.info("activating edit");
              return this.moviesDataModel.getMovieByID(params.id).then(function (data) {
                logger.info("got results");
                _this.movie = data.results[0];
              });
            }
          },
          deactivate: {
            value: function deactivate() {
              logger.info("Leaving edit");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLE1BQU0sRUFDTixVQUFVLEVBQ1YsZUFBZSxpQ0FFbkIsTUFBTSxFQUVHLE1BQU07Ozs7QUFOWCxZQUFNLGtCQUFOLE1BQU07O0FBQ04sZ0JBQVUscUJBQVYsVUFBVTs7QUFDVixxQkFBZSwwQkFBZixlQUFlOzs7Ozs7Ozs7QUFFbkIsWUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBRS9CLFlBQU07QUFNTixpQkFOQSxNQUFNLENBTUwsTUFBTSxFQUFFLGVBQWUsRUFDbkM7Z0NBUFcsTUFBTTs7QUFRZixnQkFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2pDLGNBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLGNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25COztxQkFaVSxNQUFNO0FBY2pCLGNBQUk7bUJBQUEsZ0JBQ0o7OztBQUNFLGtCQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUMvQixJQUFJLENBQUMsWUFDQTtBQUNFLHNCQUFNLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDMUMsc0JBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztlQUNuQyxDQUFDLFNBQ0YsQ0FBQyxVQUFDLEtBQUssRUFDTixFQUVDLENBQUMsQ0FBQzthQUNiOztBQUdELGtCQUFRO21CQUFBLGtCQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUMzQjs7O0FBQ0Usb0JBQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMvQixxQkFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQ2hELElBQUksQ0FBQyxVQUFBLElBQUksRUFDSjtBQUNFLHNCQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNCLHNCQUFLLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2VBQzlCLENBQUMsQ0FBQzthQUNaOztBQUVELG9CQUFVO21CQUFBLHNCQUNWO0FBQ0Usb0JBQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDNUIsa0JBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLHdCQUF3QixFQUFFLEVBQ2xFO0FBQ0Usc0JBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUN6QyxvQkFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7ZUFDekM7YUFDRjs7O0FBL0NNLGdCQUFNO21CQUFBLGtCQUNiO0FBQ0UscUJBQU8sQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7YUFDbEM7Ozs7ZUFKVSxNQUFNIiwiZmlsZSI6ImVkaXQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==