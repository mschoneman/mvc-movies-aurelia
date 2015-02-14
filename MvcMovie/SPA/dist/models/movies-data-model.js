System.register(["aurelia-framework", "breeze"], function (_export) {
  "use strict";

  var LogManager, breeze, _prototypeProperties, _classCallCheck, logger, MoviesDataModel;
  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_breeze) {
      breeze = _breeze["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      logger = LogManager.getLogger("movies-vm");
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
          },
          createMovie: {
            value: function createMovie(initialValues) {
              return this.entityManager.createEntity("Movie", initialValues);
            },
            writable: true,
            configurable: true
          },
          saveChanges: {
            value: function saveChanges() {
              var _this = this;
              if (this.entityManager.hasChanges()) {
                return this.entityManager.saveChanges().then(function (saveResult) {
                  logger.info("# of Movies saved = " + saveResult.entities.length);
                })["catch"](function (error) {
                  var reason = error.message;
                  var detail = error.detail;

                  if (error.entityErrors) {
                    reason = _this.handleSaveValidationError(error);
                  } else if (detail && detail.ExceptionType && detail.ExceptionType.indexOf("OptimisticConcurrencyException") !== -1) {
                    reason = "Another user, perhaps the server, " + "may have deleted one or all of the movies." + " You may have to restart the app.";
                  } else {
                    reason = "Failed to save changes: " + reason + " You may have to restart the app.";
                  }

                  logger.error(error, reason);
                });
              } else {
                logger.info("Nothing to save");
              }
            },
            writable: true,
            configurable: true
          },
          handleSaveValidationError: {
            value: function handleSaveValidationError(error) {
              var message = "Not saved due to validation error";
              try {
                var firstErr = error.entityErrors[0];
                message += ": " + firstErr.errorMessage;
              } catch (e) {}
              return message;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9tb3ZpZXMtZGF0YS1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxVQUFVLEVBQ1gsTUFBTSx5Q0FFVCxNQUFNLEVBRUcsZUFBZTs7O0FBTHBCLGdCQUFVLHFCQUFWLFVBQVU7O0FBQ1gsWUFBTTs7Ozs7OztBQUVULFlBQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztBQUVqQyxxQkFBZTtBQUVmLGlCQUZBLGVBQWU7Z0NBQWYsZUFBZTs7QUFJeEIsY0FBSSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUMsV0FBVyxFQUFFLHdDQUF3QyxFQUFDLENBQUMsQ0FBQztBQUNsRyxjQUFJLENBQUMsYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO1NBQzNFOzs2QkFOVSxlQUFlO0FBUTFCLG1CQUFTO21CQUFBLHFCQUNUO0FBQ0Usa0JBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDZCxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRWhDLHFCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9DOzs7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsYUFBYSxFQUN6QjtBQUNFLHFCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNoRTs7OztBQUVELHFCQUFXO21CQUFBLHVCQUNYOztBQUNFLGtCQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQ2xDO0FBQ0UsdUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FDbEMsSUFBSSxDQUFDLFVBQUEsVUFBVSxFQUNkO0FBQ0Usd0JBQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDbEUsQ0FBQyxTQUNFLENBQUMsVUFBQSxLQUFLLEVBQ1Y7QUFDRSxzQkFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUMzQixzQkFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFMUIsc0JBQUksS0FBSyxDQUFDLFlBQVksRUFDdEI7QUFDSSwwQkFBTSxHQUFHLE1BQUsseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7bUJBQ2xELE1BQ0ksSUFBSSxNQUFNLElBQ04sTUFBTSxDQUFDLGFBQWEsSUFDcEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDOUU7QUFFSSwwQkFBTSxHQUNGLG9DQUFvQyxHQUNwQyw0Q0FBNEMsR0FDNUMsbUNBQW1DLENBQUM7bUJBQzNDLE1BRUQ7QUFDSSwwQkFBTSxHQUFHLDBCQUEwQixHQUFHLE1BQU0sR0FDbkMsbUNBQW1DLENBQUM7bUJBQ2hEOztBQUVELHdCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFTN0IsQ0FBQyxDQUFDO2VBQ1YsTUFFRDtBQUNFLHNCQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7ZUFDL0I7YUFDRjs7OztBQUVELG1DQUF5QjttQkFBQSxtQ0FBQyxLQUFLLEVBQy9CO0FBQ0ksa0JBQUksT0FBTyxHQUFHLG1DQUFtQyxDQUFDO0FBQ2xELGtCQUNBO0FBRUUsb0JBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckMsdUJBQU8sSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztlQUN6QyxDQUNELE9BQU8sQ0FBQyxFQUNSLEVBRUM7QUFDRCxxQkFBTyxPQUFPLENBQUM7YUFDbEI7Ozs7OztlQXZGVSxlQUFlIiwiZmlsZSI6Im1vZGVscy9tb3ZpZXMtZGF0YS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9