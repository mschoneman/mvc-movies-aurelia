import {LogManager} from 'aurelia-framework';
import breeze from 'breeze'

var logger = LogManager.getLogger('movies-vm');

export class MoviesDataModel
{
  constructor()
  {
    var dataService = new breeze.DataService({serviceName: 'http://localhost:1235/breeze/MoviesApi'});
    this.entityManager = new breeze.EntityManager({dataService: dataService});
  }

  getMovies()
  {
    var query = breeze.EntityQuery
            .from("Movies")
            .orderBy("ReleaseDate");

    return this.entityManager.executeQuery(query);
  }

  createMovie(initialValues)
  {
    return this.entityManager.createEntity("Movie", initialValues);
  }

  saveChanges()
  {
    if(this.entityManager.hasChanges())
    {
      return this.entityManager.saveChanges()
          .then(saveResult =>
            {
              logger.info("# of Movies saved = " + saveResult.entities.length);
            })
          .catch(error =>
            {
              var reason = error.message;
              var detail = error.detail;

              if (error.entityErrors)
              {
                  reason = this.handleSaveValidationError(error);
              }
              else if (detail &&
                       detail.ExceptionType &&
                       detail.ExceptionType.indexOf('OptimisticConcurrencyException') !== -1)
              {
                  // Concurrency error
                  reason =
                      "Another user, perhaps the server, " +
                      "may have deleted one or all of the movies." +
                      " You may have to restart the app.";
              }
              else
              {
                  reason = "Failed to save changes: " + reason +
                           " You may have to restart the app.";
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
    }
    else
    {
      logger.info("Nothing to save")
    }
  }

  handleSaveValidationError(error)
  {
      var message = "Not saved due to validation error";
      try
      {
        // fish out the first error
        var firstErr = error.entityErrors[0];
        message += ": " + firstErr.errorMessage;
      }
      catch (e)
      {
        /* eat it for now */
      }
      return message;
  }
}
