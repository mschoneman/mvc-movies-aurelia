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
    this.newMovieTitle = "";
  }

  addMovie()
  {
    if (this.newMovieTitle == '')
      return;

    this.moviesDataModel.createMovie({
                                  Title: this.newMovieTitle,
                                  Genre: 'Unknown',
                                  Price: 3.99,
                                  ReleaseDate: new Date(),
                                });

    this.newMovieTitle = '';
    this.moviesDataModel.saveChanges().then(()=>
      {
        this.getMovies();
      });
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
