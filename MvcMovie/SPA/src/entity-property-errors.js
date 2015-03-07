import {LogManager} from 'aurelia-framework';
import {Behavior} from 'aurelia-framework';

var logger = LogManager.getLogger('entityPropertyErrors');

export class EntityPropertyErrors {
  static metadata()
  {
    return Behavior.withProperty('propertyName').withProperty('entity');
  }

  constructor()
  {
    this.hasErrors = false;
    this.errorMessages = [];

    this.entity = null;
    this.propertyName = null;
    this.unsubKey = null;
    this.subscribedEntity = null;
  }

  unsubscribe()
  {
    if (this.subscribedEntity != null)
    {
      this.subscribedEntity.entityAspect.validationErrorsChanged.unsubscribe(this.unsubKey);
    }
    this.subscribedEntity = null;
    this.unsubKey = null;
  }

  updateSubscription()
  {
    this.unsubscribe();
    if (this.entity == null)
      return;
    this.subscribedEntity = this.entity;
    this.unsubKey = this.subscribedEntity.entityAspect.validationErrorsChanged.subscribe(event =>
                                                                                         {
                                                                                           logger.info('validationErrorsChanged');
                                                                                           this.updateErrors();
                                                                                         });
  }

  updateErrors()
  {
    if (this.entity == null || this.propertyName == null)
    {
      this.hasErrors = false;
      this.errorMessages = [];
      return;
    }

    this.errorMessages = this.entity.entityAspect.getValidationErrors(this.propertyName).map(item =>
                                                                                             {
                                                                                               return item.errorMessage
                                                                                             });
    this.hasErrors = this.errorMessages.length != 0;
    logger.info('updateErrors: hasErrors=' + this.hasErrors);
  }

  entityChanged(newValue)
  {
    this.updateSubscription();
    this.updateErrors();
  }

  propertyNameChanged(newValue)
  {
    this.updateErrors();
  }

  attached()
  {
    logger.info('attached');
    logger.info('entity:' + this.entity);
    logger.info('propertyName:' + this.propertyName);
  }

  detached()
  {
    logger.info('detached');
    this.unsubscribe();
  }
}
