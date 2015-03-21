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

      logger = LogManager.getLogger("details-vm");
      Movies = _export("Movies", (function () {
        function Movies(router, moviesDataModel) {
          _classCallCheck(this, Movies);

          logger.info("constructing details");
          this.theRouter = router;
          this.moviesDataModel = moviesDataModel;
          this.movie = null;
        }

        _createClass(Movies, {
          "delete": {
            value: function _delete() {
              var _this = this;

              this.movie.entityAspect.setDeleted();
              this.moviesDataModel.saveChanges().then(function () {
                logger.info("Successfully saved changes");
                _this.theRouter.navigate("movies");
              });
            }
          },
          activate: {
            value: function activate(params, qs, config) {
              var _this = this;

              logger.info("activating details");
              return this.moviesDataModel.getMovieByID(params.id).then(function (data) {
                logger.info("got results");
                _this.movie = data.results[0];
              });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNOLFVBQVUsRUFDVixlQUFlLGlDQUVuQixNQUFNLEVBRUcsTUFBTTs7OztBQU5YLFlBQU0sa0JBQU4sTUFBTTs7QUFDTixnQkFBVSxxQkFBVixVQUFVOztBQUNWLHFCQUFlLDBCQUFmLGVBQWU7Ozs7Ozs7OztBQUVuQixZQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFFbEMsWUFBTTtBQU1OLGlCQU5BLE1BQU0sQ0FNTCxNQUFNLEVBQUMsZUFBZSxFQUNsQztnQ0FQVyxNQUFNOztBQVFmLGdCQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDcEMsY0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDeEIsY0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7O3FCQVpVLE1BQU07O21CQWNYLG1CQUNOOzs7QUFDRSxrQkFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDckMsa0JBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQy9CLElBQUksQ0FBQyxZQUNBO0FBQ0Usc0JBQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUMxQyxzQkFBSyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2VBQ25DLENBQUMsQ0FBQzthQUNaOztBQUVELGtCQUFRO21CQUFBLGtCQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUMzQjs7O0FBQ0Usb0JBQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNsQyxxQkFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQ2hELElBQUksQ0FBQyxVQUFBLElBQUksRUFDSjtBQUNFLHNCQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNCLHNCQUFLLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2VBQzlCLENBQUMsQ0FBQzthQUNaOzs7QUFqQ00sZ0JBQU07bUJBQUEsa0JBQ2I7QUFDRSxxQkFBTyxDQUFDLE1BQU0sRUFBQyxlQUFlLENBQUMsQ0FBQzthQUNqQzs7OztlQUpVLE1BQU0iLCJmaWxlIjoiZGVsZXRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=