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
          this.subscribedEntity = null;
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
            value: function unsubscribe() {
              if (this.subscribedEntity != null) {
                this.subscribedEntity.entityAspect.validationErrorsChanged.unsubscribe(this.unsubKey);
              }
              this.subscribedEntity = null;
              this.unsubKey = null;
            },
            writable: true,
            configurable: true
          },
          updateSubscription: {
            value: function updateSubscription() {
              var _this = this;

              this.unsubscribe();
              if (this.entity == null) {
                return;
              }this.subscribedEntity = this.entity;
              this.unsubKey = this.subscribedEntity.entityAspect.validationErrorsChanged.subscribe(function (event) {
                logger.info("validationErrorsChanged");
                _this.updateErrors();
              });
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
              logger.info("updateErrors: hasErrors=" + this.hasErrors);
            },
            writable: true,
            configurable: true
          },
          entityChanged: {
            value: function entityChanged(newValue) {
              this.updateSubscription();
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
              logger.info("attached");
              logger.info("entity:" + this.entity);
              logger.info("propertyName:" + this.propertyName);
            },
            writable: true,
            configurable: true
          },
          detached: {
            value: function detached() {
              logger.info("detached");
              this.unsubscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eS1wcm9wZXJ0eS1lcnJvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsRUFDVixRQUFRLHlDQUVaLE1BQU0sRUFFRyxvQkFBb0I7Ozs7QUFMekIsZ0JBQVUscUJBQVYsVUFBVTtBQUNWLGNBQVEscUJBQVIsUUFBUTs7Ozs7Ozs7O0FBRVosWUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUM7QUFFNUMsMEJBQW9CO0FBTXBCLGlCQU5BLG9CQUFvQjtnQ0FBcEIsb0JBQW9COztBQVE3QixjQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN2QixjQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQzs7QUFFeEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsY0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDekIsY0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsY0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUM5Qjs7NkJBZlUsb0JBQW9CO0FBQ3hCLGtCQUFRO21CQUFBLG9CQUNmO0FBQ0UscUJBQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDckU7Ozs7O0FBYUQscUJBQVc7bUJBQUEsdUJBQ1g7QUFDRSxrQkFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxFQUNqQztBQUNFLG9CQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7ZUFDdkY7QUFDRCxrQkFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUM3QixrQkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDdEI7Ozs7QUFFRCw0QkFBa0I7bUJBQUEsOEJBQ2xCOzs7QUFDRSxrQkFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25CLGtCQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSTtBQUNyQix1QkFBTztlQUFBLEFBQ1QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDcEMsa0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLLEVBQ0w7QUFDRSxzQkFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3ZDLHNCQUFLLFlBQVksRUFBRSxDQUFDO2VBQ3JCLENBQUMsQ0FBQzthQUN6Rjs7OztBQUVELHNCQUFZO21CQUFBLHdCQUNaO0FBQ0Usa0JBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQ3BEO0FBQ0Usb0JBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLG9CQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN4Qix1QkFBTztlQUNSOztBQUVELGtCQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLEVBQ0o7QUFDRSx1QkFBTyxJQUFJLENBQUMsWUFBWSxDQUFBO2VBQ3pCLENBQUMsQ0FBQztBQUM1RixrQkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7QUFDaEQsb0JBQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFEOzs7O0FBRUQsdUJBQWE7bUJBQUEsdUJBQUMsUUFBUSxFQUN0QjtBQUNFLGtCQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUMxQixrQkFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCOzs7O0FBRUQsNkJBQW1CO21CQUFBLDZCQUFDLFFBQVEsRUFDNUI7QUFDRSxrQkFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQ1I7QUFDRSxvQkFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QixvQkFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLG9CQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEQ7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFDUjtBQUNFLG9CQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3hCLGtCQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDcEI7Ozs7OztlQS9FVSxvQkFBb0IiLCJmaWxlIjoiZW50aXR5LXByb3BlcnR5LWVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9