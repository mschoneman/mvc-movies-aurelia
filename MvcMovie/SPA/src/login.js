import {UserModel} from './models/user-model'

export class Login{
  static inject()
  {
    return [UserModel];
  }
  constructor(userModel)
  {
    this.userModel = userModel;
    this.username = 'test@example.com';
    this.password = 'test';
  }

  login()
  {
  setTimeout(()=>{this.userModel.currentUser = "monkey";},500);
    
  }
}

