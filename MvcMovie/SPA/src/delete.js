import {Router} from 'aurelia-router';
import {LogManager} from 'aurelia-framework';
import {MoviesDataModel} from './models/movies-data-model'

var logger = LogManager.getLogger('details-vm');

export class Movies {
  static inject()
  {
    return [Router,MoviesDataModel];
  }

  constructor(router,moviesDataModel)
  {
    logger.info("constructing details");
    this.theRouter = router;
    this.moviesDataModel = moviesDataModel;
    this.movie = null;
  }

  delete()
  {
    this.movie.entityAspect.setDeleted();
    this.moviesDataModel.saveChanges()
      .then(()=>
            {
              logger.info("Successfully saved changes");
              this.theRouter.navigate("movies");
            });
  }

  activate(params, qs, config)
  {
    logger.info("activating details");
    return this.moviesDataModel.getMovieByID(params.id)
      .then(data =>
            {
              logger.info("got results");
              this.movie = data.results[0];
            });
  }
}
