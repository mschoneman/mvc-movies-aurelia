import {Router} from 'aurelia-router';
import {LogManager} from 'aurelia-framework';
import {MoviesDataModel} from './models/movies-data-model'

var logger = LogManager.getLogger('edit-vm');

export class Movies {
  static inject()
  {
    return [Router, MoviesDataModel];
  }

  constructor(router, moviesDataModel)
  {
    logger.info("constructing edit");
    this.theRouter = router;
    this.moviesDataModel = moviesDataModel;
    this.movie = null;
  }

  save()
  {
    this.moviesDataModel.saveChanges()
      .then(()=>
            {
              logger.info("Successfully saved changes");
              this.theRouter.navigate("movies");
            });
  }


  activate(params, qs, config)
  {
    logger.info("activating edit");
    return this.moviesDataModel.getMovieByID(params.id)
      .then(data =>
            {
              logger.info("got results");
              this.movie = data.results[0];
            });
  }

  deactivate()
  {
    logger.info("Leaving edit");
    if (this.movie.entityAspect.entityState.isAddedModifiedOrDeleted())
    {
      logger.info("Rejecting pending changes");
      this.movie.entityAspect.rejectChanges();
    }
  }

}
