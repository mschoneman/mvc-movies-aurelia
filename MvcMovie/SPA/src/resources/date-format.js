import {LogManager} from 'aurelia-framework';
import moment from 'moment';

var logger = LogManager.getLogger('dateformat');

export class DateFormatValueConverter
{
  toView(value, format)
  {
    return moment(value).format(format);
  }
  fromView(value, format)
  {
    logger.info("value" + value);
    logger.info("format" + format);
    return value;
  }
}
