import * as moment from 'moment';

export default class Utils {

   public static getStatus(status: string) {
      let x: string;
      switch (status) {
         case "in_progress":
            x = "In Progress"
            break;
         case "complete":
            x = "Complete"
            break;
         default:
            break;
      }
      return x
   }

   public static getDaysArray(dateString: any) {
      let year = dateString.split(' ').slice(0, -1).join(' ')
      let month = dateString.split(' ').slice(-1).join(' ')
      const date = new Date(year, month - 1, 1);
      const names = Object.freeze(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']);
      const result = []
      while (date.getMonth() == month - 1) {
         result.push({
            day: `${date.getDate()}`,
            label: `${names[date.getDay()]}`,
            fullDate: `${moment(date).format("MM/DD/YYYY")}`
         });
         date.setDate(date.getDate() + 1);
      }
      return result;
   }
}
