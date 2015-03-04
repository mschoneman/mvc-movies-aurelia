import {LogManager} from 'aurelia-framework';
import {MoviesDataModel} from './models/movies-data-model'

var logger = LogManager.getLogger('details-vm');

export class Movies {
  static inject()
  {
    return [MoviesDataModel];
  }

  constructor(moviesDataModel)
  {
    logger.info("constructing details");
    this.moviesDataModel = moviesDataModel;
    this.movie = null;
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
