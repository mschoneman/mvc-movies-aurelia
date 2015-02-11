System.register(["aurelia-framework", "./models/movies-data-model"], function (_export) {
  "use strict";

  var LogManager, MoviesDataModel, _prototypeProperties, _classCallCheck, logger, Todos;
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
      Todos = _export("Todos", (function () {
        function Todos(moviesDataModel) {
          _classCallCheck(this, Todos);

          this.moviesDataModel = moviesDataModel;
          this.items = [];
          this.heading = "MVC Movies Aurelia";
        }

        _prototypeProperties(Todos, {
          inject: {
            value: function inject() {
              return [MoviesDataModel];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;
              return this.moviesDataModel.getMovies().then(function (data) {
                logger.info("Fetched Movies");
                _this.items = data.results;
              })["catch"](function (error) {
                logger.error(error.message, "Query Failed");
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Todos;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxVQUFVLEVBQ1YsZUFBZSx5Q0FFbkIsTUFBTSxFQUVHLEtBQUs7OztBQUxWLGdCQUFVLHFCQUFWLFVBQVU7O0FBQ1YscUJBQWUsMEJBQWYsZUFBZTs7Ozs7OztBQUVuQixZQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFFakMsV0FBSztBQUdMLGlCQUhBLEtBQUssQ0FHSixlQUFlO2dDQUhoQixLQUFLOztBQUtkLGNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7U0FFckM7OzZCQVRVLEtBQUs7QUFFVCxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFTN0Msa0JBQVE7bUJBQUEsb0JBQ1I7O0FBQ0UscUJBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FDcEMsSUFBSSxDQUNILFVBQUEsSUFBSSxFQUNKO0FBQ0Usc0JBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QixzQkFBSyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztlQUMzQixDQUFDLFNBQ0UsQ0FDSixVQUFBLEtBQUssRUFDTDtBQUNFLHNCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7ZUFDN0MsQ0FBQyxDQUFDO2FBQ1I7Ozs7OztlQXpCVSxLQUFLIiwiZmlsZSI6Im1vdmllcy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9