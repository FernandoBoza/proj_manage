import * as moment from 'moment';
import {Observable, of} from "rxjs";

export default class Utils {

  public static validateEmail(email: String) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  public static validationUserSignUp(email, name, password, confirmedPassword, err) {

    if (email == "" || email == null) {
      err.email.push("Please enter an email")
    } else if (!this.validateEmail(email)) {
      err.email.push("Not a valid email")
    }

    if (name == "" || name == null) {
      err.name.push("Please enter a name")
    }

    if (password == "" || password == null) {
      err.password.push("Please enter a password")
    } else if (password.length < 8) {
      err.password.push("Please enter a password 8 or more characters long")
    } else if (password != confirmedPassword) {
      err.password.push("Password doesn't match")
    }

    return err.email.length == 0 && err.name.length == 0 && err.password.length == 0;
  }

  public static validationUserLogin(email, password, err?) {
    if (email == "" || email == null) {
      err.email.push("Please enter an email")
    } else if (!this.validateEmail(email)) {
      err.email.push("Not a valid email")
    }
    if (password == "" || password == null) {
      err.password.push("Please enter a password")
    } else if (password.length < 8) {
      err.password.push("Please enter a password 8 or more characters long")
    }
    return err.email.length == 0 && err.password.length == 0;
  }

  public static getStatus(status: string) {
    let x: string;
    switch (status) {
      case "in_progress":
        x = "In Progress";
        break;
      case "complete":
        x = "Complete";
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

  public static formatBytes(a, b) {
    if (0 == a) return "0 Bytes";
    const c = 1024, d = b || 2, e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
  }

  public static handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
