import {LogManager} from 'aurelia-framework';
import moment from 'moment';

var logger = LogManager.getLogger('dateformat');

export class DateFormatValueConverter
{
  toView(value, format)
  {
    logger.info("toView value: " + value);
    logger.info("toView format" + format);
    return moment(value).format(format);
  }

  fromView(value)
  {
    logger.info("fromView value: " + value);
    return moment(value).toISOString();
  }
}
