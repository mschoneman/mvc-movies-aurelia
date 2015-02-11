import {LogManager} from 'aurelia-framework';
import {MoviesDataModel} from './models/movies-data-model'

var logger = LogManager.getLogger('movies-vm');

export class Todos
{
  static inject() { return [MoviesDataModel]; }
  constructor(moviesDataModel)
  {
    this.moviesDataModel = moviesDataModel;
    this.items = [];
    this.heading = "MVC Movies Aurelia";

  }

  activate()
  {
    return this.moviesDataModel.getMovies()
      .then(
        data=>
        {
          logger.info("Fetched Movies");
          this.items = data.results;
        })
      .catch(
        error =>
        {
          logger.error(error.message, "Query Failed");
        });
  }
}
