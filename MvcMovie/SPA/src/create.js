import {Router} from 'aurelia-router';
import {LogManager} from 'aurelia-framework';
import {MoviesDataModel} from './models/movies-data-model'

var logger = LogManager.getLogger('create-vm');

export class Movies {
  static inject()
  {
    return [Router, MoviesDataModel];
  }

  constructor(router, moviesDataModel)
  {
    this.theRouter = router;
    this.moviesDataModel = moviesDataModel;
    this.movie = this.moviesDataModel.createMovie({
                                                    Title: "Ghotst Busters III",
                                                    Genre: "Comedy",
                                                    Price: 3.99,
                                                    ReleaseDate: new Date(),
                                                    Rating: "G"
                                                  });
  }

  create()
  {
    this.moviesDataModel.saveChanges()
      .then(()=>
            {
              logger.info("Successfully saved changes");
              this.theRouter.navigate("movies");
            });
  }

  deactivate()
  {
    logger.info("Leaving create");
    if (this.movie.entityAspect.entityState.isAddedModifiedOrDeleted())
    {
      logger.info("Rejecting pending changes");
      this.movie.entityAspect.rejectChanges();
    }
  }

}
