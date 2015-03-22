import {Behavior} from 'aurelia-framework';
import {UserModel} from './models/user-model'

export class NavBar
{
  static metadata() {
    return Behavior.withProperty('router');
  }

  static inject() {
    return [UserModel];
  }

  constructor(userModel) {
    this.userModel = userModel;
  }
}
