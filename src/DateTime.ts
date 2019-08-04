export class DateTime {
  public today(): Date {
    return new Date();
  }

  public todayToString() {
    const date = this.today();
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
