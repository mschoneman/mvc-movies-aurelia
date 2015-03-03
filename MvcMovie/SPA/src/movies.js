import {LogManager} from 'aurelia-framework';
import {MoviesDataModel} from './models/movies-data-model'

var logger = LogManager.getLogger('movies-vm');

export class Movies
{
  static inject() { return [MoviesDataModel]; }
  constructor(moviesDataModel)
  {
    this.moviesDataModel = moviesDataModel;
    this.items = [];
    this.heading = "MVC Movies Aurelia Index";
    this.newMovieTitle = "";
  }

  getMovies()
  {
    return this.moviesDataModel.getMovies()
      .then(
        data=>
        {
          logger.info("Fetched Movies");
          this.items = data.results;
          logger.info("items.length = " + this.items.length)
        })
      .catch(
        error =>
        {
          logger.error(error.message, "Query Failed");
        });
  }

  activate()
  {
    return this.getMovies();
  }
}
