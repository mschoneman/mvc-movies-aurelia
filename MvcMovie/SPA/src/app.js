import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject()
  {
    return [Router];
  }

  constructor(router)
  {
    this.router = router;
    this.router.configure(config =>
                          {
                            config.title = 'Aurelia Movie';
                            config.map([
                                         {route: [''], moduleId: 'welcome', nav: true, title: 'Home'},
                                         {route: 'movies', moduleId: 'movies', nav: true, title: 'Movies'},
                                         {route: 'movies/create', moduleId: 'create', nav: false, title: 'Create'},
                                         {route: 'movies/details/:id', moduleId: 'details', nav: false, title: 'Details'},
                                         {route: 'movies/edit/:id', moduleId: 'edit', nav: false, title: 'Edit'},
                                         {route: 'movies/delete/:id', moduleId: 'delete', nav: false, title: 'Delete'},
                                       ]);
                          });
  }
}
