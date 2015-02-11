import {PageObject_Welcome} from './welcome.po.js';
import {PageObject_Skeleton} from './skeleton.po.js';

describe('aurelia skeleton app', function() {
  var po_welcome,
      po_skeleton;

  beforeEach( () => {
    po_skeleton = new PageObject_Skeleton();
    po_welcome = new PageObject_Welcome();

    browser.get('http://localhost:9000');

    browser.executeAsyncScript(
      'var cb = arguments[arguments.length - 1];' +
      'document.addEventListener("aurelia-composed", function (e) {' +
      '  cb("Aurelia App composed")' +
      '}, false);'
    ).then(function(result){
        console.log(result);
    });
  });

  it('should load the page and display the initial page title', () => {
    expect(po_skeleton.getCurrentPageTitle()).toBe('Welcome | Aurelia');
  });

  it('should display greeting', () => {
    expect(po_welcome.getGreeting()).toBe('Welcome to the Aurelia Navigation App!');
  });

  it('should automatically write down the fullname', () => {
    po_welcome.setFirstname('Rob');
    po_welcome.setLastname('Eisenberg');
    expect(po_welcome.getFullname()).toBe('ROB EISENBERG');
  });

  xit('should show alert message when clicking submit button', () => {
    expect(po_welcome.openAlertDialog()).toBe(true);
  });

  it('should navigate to flickr page', () => {
    po_skeleton.navigateTo('#/flickr');
    expect(po_skeleton.getCurrentPageTitle()).toBe('Flickr | Aurelia');
  });
});
