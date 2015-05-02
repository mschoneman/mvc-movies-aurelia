System.register(["aurelia-framework"], function (_export) {
  var LogManager, Behavior, _prototypeProperties, _classCallCheck, logger, EntityPropertyErrors;

  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      logger = LogManager.getLogger("entityPropertyErrors");
      EntityPropertyErrors = _export("EntityPropertyErrors", (function () {
        function EntityPropertyErrors() {
          _classCallCheck(this, EntityPropertyErrors);

          this.hasErrors = false;
          this.errorMessages = [];

          this.entity = null;
          this.propertyName = null;
          this.unsubKey = null;
        }

        _prototypeProperties(EntityPropertyErrors, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("propertyName").withProperty("entity");
            },
            writable: true,
            configurable: true
          }
        }, {
          unsubscribe: {
            value: function unsubscribe(subscribedEntity) {
              if (subscribedEntity != null) {
                subscribedEntity.entityAspect.validationErrorsChanged.unsubscribe(this.unsubKey);
                logger.info(this.propertyName + " unsubscribed");
              }
              this.unsubKey = null;
            },
            writable: true,
            configurable: true
          },
          updateSubscription: {
            value: function updateSubscription(newEntity, oldEntity) {
              var _this = this;

              this.unsubscribe(oldEntity);
              if (newEntity == null) {
                return;
              }this.unsubKey = newEntity.entityAspect.validationErrorsChanged.subscribe(function (event) {
                logger.info("validationErrorsChanged");
                _this.updateErrors();
              });
              logger.info(this.propertyName + " subscribed");
            },
            writable: true,
            configurable: true
          },
          updateErrors: {
            value: function updateErrors() {
              if (this.entity == null || this.propertyName == null) {
                this.hasErrors = false;
                this.errorMessages = [];
                return;
              }

              this.errorMessages = this.entity.entityAspect.getValidationErrors(this.propertyName).map(function (item) {
                return item.errorMessage;
              });
              this.hasErrors = this.errorMessages.length != 0;
              logger.info(this.propertyName + " updateErrors: hasErrors=" + this.hasErrors);
            },
            writable: true,
            configurable: true
          },
          entityChanged: {
            value: function entityChanged(newValue, oldValue) {
              this.updateSubscription(newValue, oldValue);
              this.updateErrors();
            },
            writable: true,
            configurable: true
          },
          propertyNameChanged: {
            value: function propertyNameChanged(newValue) {
              this.updateErrors();
            },
            writable: true,
            configurable: true
          },
          attached: {
            value: function attached() {
              logger.info(this.propertyName + " attached");
            },
            writable: true,
            configurable: true
          },
          detached: {
            value: function detached() {
              logger.info(this.propertyName + " detached");
              this.entity = null;
            },
            writable: true,
            configurable: true
          }
        });

        return EntityPropertyErrors;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eS1wcm9wZXJ0eS1lcnJvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsRUFDVixRQUFRLHlDQUVaLE1BQU0sRUFFRyxvQkFBb0I7Ozs7QUFMekIsZ0JBQVUscUJBQVYsVUFBVTtBQUNWLGNBQVEscUJBQVIsUUFBUTs7Ozs7Ozs7O0FBRVosWUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUM7QUFFNUMsMEJBQW9CO0FBTXBCLGlCQU5BLG9CQUFvQjtnQ0FBcEIsb0JBQW9COztBQVE3QixjQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN2QixjQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQzs7QUFFeEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsY0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDekIsY0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7OzZCQWRVLG9CQUFvQjtBQUN4QixrQkFBUTttQkFBQSxvQkFDZjtBQUNFLHFCQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JFOzs7OztBQVlELHFCQUFXO21CQUFBLHFCQUFDLGdCQUFnQixFQUM1QjtBQUNFLGtCQUFJLGdCQUFnQixJQUFJLElBQUksRUFDNUI7QUFDRSxnQ0FBZ0IsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqRixzQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxDQUFDO2VBQ2xEO0FBQ0Qsa0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCOzs7O0FBRUQsNEJBQWtCO21CQUFBLDRCQUFDLFNBQVMsRUFBRSxTQUFTLEVBQ3ZDOzs7QUFDRSxrQkFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QixrQkFBSSxTQUFTLElBQUksSUFBSTtBQUNuQix1QkFBTztlQUFBLEFBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssRUFDTDtBQUNFLHNCQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDdkMsc0JBQUssWUFBWSxFQUFFLENBQUM7ZUFDckIsQ0FBQyxDQUFDO0FBQzVFLG9CQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUM7YUFDaEQ7Ozs7QUFFRCxzQkFBWTttQkFBQSx3QkFDWjtBQUNFLGtCQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUNwRDtBQUNFLG9CQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN2QixvQkFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDeEIsdUJBQU87ZUFDUjs7QUFFRCxrQkFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxFQUNKO0FBQ0UsdUJBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtlQUN6QixDQUFDLENBQUM7QUFDNUYsa0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0FBQ2hELG9CQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9FOzs7O0FBRUQsdUJBQWE7bUJBQUEsdUJBQUMsUUFBUSxFQUFFLFFBQVEsRUFDaEM7QUFDRSxrQkFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM1QyxrQkFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCOzs7O0FBRUQsNkJBQW1CO21CQUFBLDZCQUFDLFFBQVEsRUFDNUI7QUFDRSxrQkFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQ1I7QUFDRSxvQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxDQUFDO2FBQzlDOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQ1I7QUFDRSxvQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxDQUFDO0FBQzdDLGtCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNwQjs7Ozs7O2VBNUVVLG9CQUFvQiIsImZpbGUiOiJlbnRpdHktcHJvcGVydHktZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=