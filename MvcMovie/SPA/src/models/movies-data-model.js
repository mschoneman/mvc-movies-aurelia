import breeze from 'breeze'

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

}
