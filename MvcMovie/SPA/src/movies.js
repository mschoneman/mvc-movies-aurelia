import {Router} from 'aurelia-router'
import {LogManager} from 'aurelia-framework';
import {MoviesDataModel} from './models/movies-data-model'

var logger = LogManager.getLogger('movies-vm');

export class Movies {
  static inject()
  {
    return [Router,MoviesDataModel];
  }

  constructor(theRouter,moviesDataModel)
  {
    this.theRouter = theRouter;
    this.moviesDataModel = moviesDataModel;
    this.items = [];
    this.genres = []
    this.heading = "MVC Movies Aurelia Index";
    this.selectedGenre = "";
    this.searchString = "";
  }

  filter()
  {
    this.getMovies();
  }

  createNew()
  {
    logger.info("createNew called");
    this.theRouter.navigate("movies/create");
  }

  details(movie)
  {
    this.theRouter.navigate("movies/details/" + movie.ID);
  }

  edit()
  {

  }

  delete()
  {

  }

  getMovies()
  {
    return this.moviesDataModel.getMovies()
      .then(data =>
      {
        logger.info("Fetched Movies");
        this.items = data.results;
        if (this.genres.length == 0)
        {
          this.genres = this.items.map((element) =>
                                       {
                                         return element.Genre;
                                       })
            .filter((element, index, array) =>
                    {
                      return array.indexOf(element) == index;
                    })
            .sort();
        }
        logger.info("items.length = " + this.items.length)
        logger.info("genres.length = " + this.genres.length)

        logger.info("selectedGenre = " + this.selectedGenre);
        logger.info("searchString = " + this.searchString);

        this.items = this.items.filter((element, index, array) =>
                          {
                            if (this.selectedGenre != "")
                            {
                              if (element.Genre == null)
                                return false;
                              if (element.Genre != this.selectedGenre)
                                return false;
                            }

                            if (this.searchString != "")
                            {
                              if (element.Title == null)
                                return false;
                              if (element.Title.indexOf(this.searchString) == -1)
                                return false;
                            }

                            return true;
                          });
        logger.info("filtered items.length = " + this.items.length)
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
