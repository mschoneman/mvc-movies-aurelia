System.register(["aurelia-framework"], function (_export) {
  var LogManager, Behavior, _createClass, _classCallCheck, logger, EntityPropertyErrors;

  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

        _createClass(EntityPropertyErrors, {
          unsubscribe: {
            value: function unsubscribe(subscribedEntity) {
              if (subscribedEntity != null) {
                subscribedEntity.entityAspect.validationErrorsChanged.unsubscribe(this.unsubKey);
                logger.info(this.propertyName + " unsubscribed");
              }
              this.unsubKey = null;
            }
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
            }
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
            }
          },
          entityChanged: {
            value: function entityChanged(newValue, oldValue) {
              this.updateSubscription(newValue, oldValue);
              this.updateErrors();
            }
          },
          propertyNameChanged: {
            value: function propertyNameChanged(newValue) {
              this.updateErrors();
            }
          },
          attached: {
            value: function attached() {
              logger.info(this.propertyName + " attached");
            }
          },
          detached: {
            value: function detached() {
              logger.info(this.propertyName + " detached");
              this.entity = null;
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("propertyName").withProperty("entity");
            }
          }
        });

        return EntityPropertyErrors;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eS1wcm9wZXJ0eS1lcnJvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsRUFDVixRQUFRLGlDQUVaLE1BQU0sRUFFRyxvQkFBb0I7Ozs7QUFMekIsZ0JBQVUscUJBQVYsVUFBVTtBQUNWLGNBQVEscUJBQVIsUUFBUTs7Ozs7Ozs7O0FBRVosWUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUM7QUFFNUMsMEJBQW9CO0FBTXBCLGlCQU5BLG9CQUFvQixHQU8vQjtnQ0FQVyxvQkFBb0I7O0FBUTdCLGNBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDOztBQUV4QixjQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQixjQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixjQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0Qjs7cUJBZFUsb0JBQW9CO0FBZ0IvQixxQkFBVzttQkFBQSxxQkFBQyxnQkFBZ0IsRUFDNUI7QUFDRSxrQkFBSSxnQkFBZ0IsSUFBSSxJQUFJLEVBQzVCO0FBQ0UsZ0NBQWdCLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakYsc0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsQ0FBQztlQUNsRDtBQUNELGtCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN0Qjs7QUFFRCw0QkFBa0I7bUJBQUEsNEJBQUMsU0FBUyxFQUFDLFNBQVMsRUFDdEM7OztBQUNFLGtCQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVCLGtCQUFJLFNBQVMsSUFBSSxJQUFJO0FBQ25CLHVCQUFPO2VBQUEsQUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxFQUNPO0FBQ0Usc0JBQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUN2QyxzQkFBSyxZQUFZLEVBQUUsQ0FBQztlQUNyQixDQUFDLENBQUM7QUFDeEYsb0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsQ0FBQzthQUNoRDs7QUFFRCxzQkFBWTttQkFBQSx3QkFDWjtBQUNFLGtCQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUNwRDtBQUNFLG9CQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN2QixvQkFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDeEIsdUJBQU87ZUFDUjs7QUFFRCxrQkFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxFQUNKO0FBQ0UsdUJBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtlQUN6QixDQUFDLENBQUM7QUFDNUYsa0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0FBQ2hELG9CQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9FOztBQUVELHVCQUFhO21CQUFBLHVCQUFDLFFBQVEsRUFBQyxRQUFRLEVBQy9CO0FBQ0Usa0JBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0Msa0JBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjs7QUFFRCw2QkFBbUI7bUJBQUEsNkJBQUMsUUFBUSxFQUM1QjtBQUNFLGtCQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQ1I7QUFDRSxvQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxDQUFDO2FBQzlDOztBQUVELGtCQUFRO21CQUFBLG9CQUNSO0FBQ0Usb0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsQ0FBQztBQUM3QyxrQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDcEI7OztBQTNFTSxrQkFBUTttQkFBQSxvQkFDZjtBQUNFLHFCQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JFOzs7O2VBSlUsb0JBQW9CIiwiZmlsZSI6ImVudGl0eS1wcm9wZXJ0eS1lcnJvcnMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==