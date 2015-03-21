System.register(["aurelia-framework", "./models/movies-data-model"], function (_export) {
  var LogManager, MoviesDataModel, _createClass, _classCallCheck, logger, Movies;

  return {
    setters: [function (_aureliaFramework) {
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
        function Movies(moviesDataModel) {
          _classCallCheck(this, Movies);

          logger.info("constructing details");
          this.moviesDataModel = moviesDataModel;
          this.movie = null;
        }

        _createClass(Movies, {
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
              return [MoviesDataModel];
            }
          }
        });

        return Movies;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsRUFDVixlQUFlLGlDQUVuQixNQUFNLEVBRUcsTUFBTTs7OztBQUxYLGdCQUFVLHFCQUFWLFVBQVU7O0FBQ1YscUJBQWUsMEJBQWYsZUFBZTs7Ozs7Ozs7O0FBRW5CLFlBQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztBQUVsQyxZQUFNO0FBTU4saUJBTkEsTUFBTSxDQU1MLGVBQWUsRUFDM0I7Z0NBUFcsTUFBTTs7QUFRZixnQkFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3BDLGNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLGNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25COztxQkFYVSxNQUFNO0FBYWpCLGtCQUFRO21CQUFBLGtCQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUMzQjs7O0FBQ0Usb0JBQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNsQyxxQkFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQ2hELElBQUksQ0FBQyxVQUFBLElBQUksRUFDSjtBQUNFLHNCQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNCLHNCQUFLLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2VBQzlCLENBQUMsQ0FBQzthQUNaOzs7QUFyQk0sZ0JBQU07bUJBQUEsa0JBQ2I7QUFDRSxxQkFBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQzFCOzs7O2VBSlUsTUFBTSIsImZpbGUiOiJkZXRhaWxzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=