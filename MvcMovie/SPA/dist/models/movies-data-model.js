System.register(["breeze"], function (_export) {
  "use strict";

  var breeze, _prototypeProperties, _classCallCheck, MoviesDataModel;
  return {
    setters: [function (_breeze) {
      breeze = _breeze["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      MoviesDataModel = _export("MoviesDataModel", (function () {
        function MoviesDataModel() {
          _classCallCheck(this, MoviesDataModel);

          var dataService = new breeze.DataService({ serviceName: "http://localhost:1235/breeze/MoviesApi" });
          this.entityManager = new breeze.EntityManager({ dataService: dataService });
        }

        _prototypeProperties(MoviesDataModel, null, {
          getMovies: {
            value: function getMovies() {
              var query = breeze.EntityQuery.from("Movies").orderBy("ReleaseDate");

              return this.entityManager.executeQuery(query);
            },
            writable: true,
            configurable: true
          }
        });

        return MoviesDataModel;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9tb3ZpZXMtZGF0YS1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBTyxNQUFNLHlDQUVBLGVBQWU7OztBQUZyQixZQUFNOzs7Ozs7O0FBRUEscUJBQWU7QUFFZixpQkFGQSxlQUFlO2dDQUFmLGVBQWU7O0FBSXhCLGNBQUksV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFDLFdBQVcsRUFBRSx3Q0FBd0MsRUFBQyxDQUFDLENBQUM7QUFDbEcsY0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztTQUMzRTs7NkJBTlUsZUFBZTtBQVExQixtQkFBUzttQkFBQSxxQkFDVDtBQUNFLGtCQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQ2QsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztBQUVoQyxxQkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQzs7Ozs7O2VBZlUsZUFBZSIsImZpbGUiOiJtb2RlbHMvbW92aWVzLWRhdGEtbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==