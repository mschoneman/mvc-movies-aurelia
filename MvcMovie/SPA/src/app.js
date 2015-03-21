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
      logger.debug("usermodel observed");
      changes.forEach((change,i)=>
      {

        if(change.type === "update" && change.name === "currentUser")
        {
          logger.debug("matching change found");
          this.router.reset();
          this.router.configure(config =>
          {
            config.title = 'Logged In';
            config.map([
              {route: ['','home'], moduleId: 'welcome', nav: true, title: 'Home'},
              {route: 'movies', moduleId: 'movies', nav: true, title: 'Movies'},
              {route: 'movies/create', moduleId: 'create', nav: false, title: 'Create'},
              {route: 'movies/details/:id', moduleId: 'details', nav: false, title: 'Details'},
              {route: 'movies/edit/:id', moduleId: 'edit', nav: false, title: 'Edit'},
              {route: 'movies/delete/:id', moduleId: 'delete', nav: false, title: 'Delete'},
            ]);
          });
          this.router.refreshNavigation();
          this.router.navigate("home");
        }
      });
    });
    this.router.configure(config =>
    {
      config.title = 'Aurelia Movie';
      config.map([
        {route: [''], moduleId: 'login', nav: false, title: 'Login'},
      ]);
    });
  }
}
