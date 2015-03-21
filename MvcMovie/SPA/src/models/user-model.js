import {LogManager} from 'aurelia-framework';

var logger = LogManager.getLogger('user-model');

export class UserModel
{
  constructor()
  {
    this.currentUser = null;
  }
}
