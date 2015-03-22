import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';
import {UserModel} from './models/user-model'
import {LogManager} from 'aurelia-framework';

var logger = LogManager.getLogger('app');

export class App {
  static inject()
  {
    return [Router,UserModel];
  }

  constructor(router,userModel)
  {
    this.router = router;
    this.userModel = userModel;
    Object.observe(userModel,changes =>
    {
      let rebuildNavRequired = false;
      changes.forEach((change,i)=>
      {

        if(change.type === "update" && change.name === "currentUser")
        {
          rebuildNavRequired = true;
        }

        if(rebuildNavRequired)
        {
          this.buildRoutes();
          this.router.navigate(this.userModel.currentUser != null ? "home" : "login" );
        }
      });
    });

    this.buildRoutes();
 }

  buildRoutes()
  {
    this.router.reset();
    this.router.configure(config =>
    {
      if(this.userModel.currentUser != null)
      {
        config.title = 'Logged In';
        config.map([
          {route: ['', 'home'], moduleId: 'welcome', nav: true, title: 'Home'},
          {route: 'movies', moduleId: 'movies', nav: true, title: 'Movies'},
          {route: 'movies/create', moduleId: 'create', nav: false, title: 'Create'},
          {route: 'movies/details/:id', moduleId: 'details', nav: false, title: 'Details'},
          {route: 'movies/edit/:id', moduleId: 'edit', nav: false, title: 'Edit'},
          {route: 'movies/delete/:id', moduleId: 'delete', nav: false, title: 'Delete'},
        ]);
      }
      else
      {
        config.title = 'Aurelia Movie';
        config.map([
          {route: ['','login'], moduleId: 'login', nav: false, title: 'Login'},
        ]);
      }
    });
    this.router.refreshNavigation();
  }
}
