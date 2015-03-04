System.register(["aurelia-framework", "breeze"], function (_export) {
  var LogManager, breeze, _prototypeProperties, _classCallCheck, logger, MoviesDataModel;

  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_breeze) {
      breeze = _breeze["default"];
    }],
    execute: function () {
      "use strict";

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
          getMovieByID: {
            value: function getMovieByID(id) {
              logger.info("getting by id");
              var query = breeze.EntityQuery.from("Movies").where("ID", "==", id);

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
                    // Concurrency error
                    reason = "Another user, perhaps the server, " + "may have deleted one or all of the movies." + " You may have to restart the app.";
                  } else {
                    reason = "Failed to save changes: " + reason + " You may have to restart the app.";
                  }

                  logger.error(error, reason);
                  /*
                  // DEMO ONLY: discard all pending changes
                  // Let them see the error for a second before rejecting changes
                  setTimeout(function () {
                      manager.rejectChanges();
                  }, 1000);
                  throw error; //
                  */
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
                // fish out the first error
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

/* eat it for now */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9tb3ZpZXMtZGF0YS1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxFQUNYLE1BQU0seUNBRVQsTUFBTSxFQUVHLGVBQWU7Ozs7QUFMcEIsZ0JBQVUscUJBQVYsVUFBVTs7QUFDWCxZQUFNOzs7Ozs7Ozs7QUFFVCxZQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFFakMscUJBQWU7QUFFZixpQkFGQSxlQUFlO2dDQUFmLGVBQWU7O0FBSXhCLGNBQUksV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFDLFdBQVcsRUFBRSx3Q0FBd0MsRUFBQyxDQUFDLENBQUM7QUFDbEcsY0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztTQUMzRTs7NkJBTlUsZUFBZTtBQVExQixtQkFBUzttQkFBQSxxQkFDVDtBQUNFLGtCQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQ2QsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztBQUVoQyxxQkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQzs7OztBQUVELHNCQUFZO21CQUFBLHNCQUFDLEVBQUUsRUFDZjtBQUNFLG9CQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzdCLGtCQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQ2QsS0FBSyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUM7O0FBRXZCLHFCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9DOzs7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsYUFBYSxFQUN6QjtBQUNFLHFCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNoRTs7OztBQUVELHFCQUFXO21CQUFBLHVCQUNYOzs7QUFDRSxrQkFBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxFQUNsQztBQUNFLHVCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQ2xDLElBQUksQ0FBQyxVQUFBLFVBQVUsRUFDZDtBQUNFLHdCQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2xFLENBQUMsU0FDRSxDQUFDLFVBQUEsS0FBSyxFQUNWO0FBQ0Usc0JBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDM0Isc0JBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLHNCQUFJLEtBQUssQ0FBQyxZQUFZLEVBQ3RCO0FBQ0ksMEJBQU0sR0FBRyxNQUFLLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO21CQUNsRCxNQUNJLElBQUksTUFBTSxJQUNOLE1BQU0sQ0FBQyxhQUFhLElBQ3BCLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzlFOztBQUVJLDBCQUFNLEdBQ0Ysb0NBQW9DLEdBQ3BDLDRDQUE0QyxHQUM1QyxtQ0FBbUMsQ0FBQzttQkFDM0MsTUFFRDtBQUNJLDBCQUFNLEdBQUcsMEJBQTBCLEdBQUcsTUFBTSxHQUNuQyxtQ0FBbUMsQ0FBQzttQkFDaEQ7O0FBRUQsd0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7aUJBUzdCLENBQUMsQ0FBQztlQUNWLE1BRUQ7QUFDRSxzQkFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO2VBQy9CO2FBQ0Y7Ozs7QUFFRCxtQ0FBeUI7bUJBQUEsbUNBQUMsS0FBSyxFQUMvQjtBQUNJLGtCQUFJLE9BQU8sR0FBRyxtQ0FBbUMsQ0FBQztBQUNsRCxrQkFDQTs7QUFFRSxvQkFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyx1QkFBTyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO2VBQ3pDLENBQ0QsT0FBTyxDQUFDLEVBQ1IsRUFFQztBQUNELHFCQUFPLE9BQU8sQ0FBQzthQUNsQjs7Ozs7O2VBakdVLGVBQWUiLCJmaWxlIjoibW9kZWxzL21vdmllcy1kYXRhLW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=