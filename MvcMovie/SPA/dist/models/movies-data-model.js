System.register(["aurelia-framework", "breeze"], function (_export) {
  var LogManager, breeze, _createClass, _classCallCheck, logger, MoviesDataModel;

  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_breeze) {
      breeze = _breeze["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      logger = LogManager.getLogger("movies-data-model");
      MoviesDataModel = _export("MoviesDataModel", (function () {
        function MoviesDataModel() {
          _classCallCheck(this, MoviesDataModel);

          var dataService = new breeze.DataService({ serviceName: "http://localhost:1235/breeze/MoviesApi" });
          this.entityManager = new breeze.EntityManager({ dataService: dataService });
        }

        _createClass(MoviesDataModel, {
          getMovies: {
            value: function getMovies() {
              var query = breeze.EntityQuery.from("Movies").orderBy("ReleaseDate");

              return this.entityManager.executeQuery(query);
            }
          },
          getMovieByID: {
            value: function getMovieByID(id) {
              logger.info("getting by id");
              var query = breeze.EntityQuery.from("Movies").where("ID", "==", id);

              return this.entityManager.executeQuery(query);
            }
          },
          createMovie: {
            value: function createMovie(initialValues) {
              return this.entityManager.createEntity("Movie", initialValues);
            }
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
                  }, 1000);*/
                  throw error;
                });
              } else {
                logger.info("Nothing to save");
              }
            }
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
            }
          }
        });

        return MoviesDataModel;
      })());
    }
  };
});

/* eat it for now */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9tb3ZpZXMtZGF0YS1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxFQUNYLE1BQU0saUNBRVQsTUFBTSxFQUVHLGVBQWU7Ozs7QUFMcEIsZ0JBQVUscUJBQVYsVUFBVTs7QUFDWCxZQUFNOzs7Ozs7Ozs7QUFFVCxZQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQztBQUV6QyxxQkFBZTtBQUVmLGlCQUZBLGVBQWUsR0FHMUI7Z0NBSFcsZUFBZTs7QUFJeEIsY0FBSSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUMsV0FBVyxFQUFFLHdDQUF3QyxFQUFDLENBQUMsQ0FBQztBQUNsRyxjQUFJLENBQUMsYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO1NBQzNFOztxQkFOVSxlQUFlO0FBUTFCLG1CQUFTO21CQUFBLHFCQUNUO0FBQ0Usa0JBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDZCxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRWhDLHFCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9DOztBQUVELHNCQUFZO21CQUFBLHNCQUFDLEVBQUUsRUFDZjtBQUNFLG9CQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzdCLGtCQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQ2QsS0FBSyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUM7O0FBRXZCLHFCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9DOztBQUVELHFCQUFXO21CQUFBLHFCQUFDLGFBQWEsRUFDekI7QUFDRSxxQkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDaEU7O0FBRUQscUJBQVc7bUJBQUEsdUJBQ1g7OztBQUNFLGtCQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQ2xDO0FBQ0UsdUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FDbEMsSUFBSSxDQUFDLFVBQUEsVUFBVSxFQUNkO0FBQ0Usd0JBQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDbEUsQ0FBQyxTQUNFLENBQUMsVUFBQSxLQUFLLEVBQ1Y7QUFDRSxzQkFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUMzQixzQkFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFMUIsc0JBQUksS0FBSyxDQUFDLFlBQVksRUFDdEI7QUFDSSwwQkFBTSxHQUFHLE1BQUsseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7bUJBQ2xELE1BQ0ksSUFBSSxNQUFNLElBQ04sTUFBTSxDQUFDLGFBQWEsSUFDcEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDOUU7O0FBRUksMEJBQU0sR0FDRixvQ0FBb0MsR0FDcEMsNENBQTRDLEdBQzVDLG1DQUFtQyxDQUFDO21CQUMzQyxNQUVEO0FBQ0ksMEJBQU0sR0FBRywwQkFBMEIsR0FBRyxNQUFNLEdBQ25DLG1DQUFtQyxDQUFDO21CQUNoRDs7QUFFRCx3QkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7QUFPNUIsd0JBQU0sS0FBSyxDQUFDO2lCQUNiLENBQUMsQ0FBQztlQUNWLE1BRUQ7QUFDRSxzQkFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO2VBQy9CO2FBQ0Y7O0FBRUQsbUNBQXlCO21CQUFBLG1DQUFDLEtBQUssRUFDL0I7QUFDSSxrQkFBSSxPQUFPLEdBQUcsbUNBQW1DLENBQUM7QUFDbEQsa0JBQ0E7O0FBRUUsb0JBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckMsdUJBQU8sSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztlQUN6QyxDQUNELE9BQU8sQ0FBQyxFQUNSLEVBRUM7QUFDRCxxQkFBTyxPQUFPLENBQUM7YUFDbEI7Ozs7ZUFoR1UsZUFBZSIsImZpbGUiOiJtb2RlbHMvbW92aWVzLWRhdGEtbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==