import moment from 'moment';

export class dateFormatValueConverter
{
  toView(value, format)
  {
    return moment(value).format(format);
  }
}
