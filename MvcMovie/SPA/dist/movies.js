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
          this.newMovieTitle = "";
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
          addMovie: {
            value: function addMovie() {
              var _this = this;
              if (this.newMovieTitle == "") return;

              this.moviesDataModel.createMovie({
                Title: this.newMovieTitle,
                Genre: "Unknown",
                Price: 3.99,
                ReleaseDate: new Date() });

              this.newMovieTitle = "";
              this.moviesDataModel.saveChanges().then(function () {
                _this.getMovies();
              });
            },
            writable: true,
            configurable: true
          },
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

        return Todos;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxVQUFVLEVBQ1YsZUFBZSx5Q0FFbkIsTUFBTSxFQUVHLEtBQUs7OztBQUxWLGdCQUFVLHFCQUFWLFVBQVU7O0FBQ1YscUJBQWUsMEJBQWYsZUFBZTs7Ozs7OztBQUVuQixZQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFFakMsV0FBSztBQUdMLGlCQUhBLEtBQUssQ0FHSixlQUFlO2dDQUhoQixLQUFLOztBQUtkLGNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7QUFDcEMsY0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7U0FDekI7OzZCQVRVLEtBQUs7QUFFVCxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFTN0Msa0JBQVE7bUJBQUEsb0JBQ1I7O0FBQ0Usa0JBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLEVBQzFCLE9BQU87O0FBRVQsa0JBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0FBQ0gscUJBQUssRUFBRSxJQUFJLENBQUMsYUFBYTtBQUN6QixxQkFBSyxFQUFFLFNBQVM7QUFDaEIscUJBQUssRUFBRSxJQUFJO0FBQ1gsMkJBQVcsRUFBRSxJQUFJLElBQUksRUFBRSxFQUN4QixDQUFDLENBQUM7O0FBRS9CLGtCQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN4QixrQkFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFDdEM7QUFDRSxzQkFBSyxTQUFTLEVBQUUsQ0FBQztlQUNsQixDQUFDLENBQUM7YUFDTjs7OztBQUVELG1CQUFTO21CQUFBLHFCQUNUOztBQUNFLHFCQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQ3BDLElBQUksQ0FDSCxVQUFBLElBQUksRUFDSjtBQUNFLHNCQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDOUIsc0JBQUssS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDMUIsc0JBQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBSyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7ZUFDbkQsQ0FBQyxTQUNFLENBQ0osVUFBQSxLQUFLLEVBQ0w7QUFDRSxzQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2VBQzdDLENBQUMsQ0FBQzthQUNSOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQ1I7QUFDRSxxQkFBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDekI7Ozs7OztlQWxEVSxLQUFLIiwiZmlsZSI6Im1vdmllcy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9