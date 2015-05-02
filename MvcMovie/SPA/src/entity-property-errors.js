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
  }

  unsubscribe(subscribedEntity)
  {
    if (subscribedEntity != null)
    {
      subscribedEntity.entityAspect.validationErrorsChanged.unsubscribe(this.unsubKey);
      logger.info(this.propertyName + ' unsubscribed');
    }
    this.unsubKey = null;
  }

  updateSubscription(newEntity, oldEntity)
  {
    this.unsubscribe(oldEntity);
    if (newEntity == null)
      return;
    this.unsubKey = newEntity.entityAspect.validationErrorsChanged.subscribe(event =>
                                                                             {
                                                                               logger.info('validationErrorsChanged');
                                                                               this.updateErrors();
                                                                             });
    logger.info(this.propertyName + ' subscribed');
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
    logger.info(this.propertyName + ' updateErrors: hasErrors=' + this.hasErrors);
  }

  entityChanged(newValue, oldValue)
  {
    this.updateSubscription(newValue, oldValue);
    this.updateErrors();
  }

  propertyNameChanged(newValue)
  {
    this.updateErrors();
  }

  attached()
  {
    logger.info(this.propertyName + ' attached');
  }

  detached()
  {
    logger.info(this.propertyName + ' detached');
    this.entity = null;
  }
}
