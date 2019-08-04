export class Transaction {
  constructor(private date: string, private amount: number) {
    this.date = date;
    this.amount = amount;
  }
  getAmount() {
    return this.amount;
  }

  getDate() {
    return this.date;
  }
}
