import moment from 'moment'

export function ISOToDate(date: any, format = 'DD.MM.YY HH:mm') {
  const momentDate = moment(date)
  return momentDate.format(format)
}
