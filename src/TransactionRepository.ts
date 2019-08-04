import { Transaction } from './Transaction';
import { DateTime } from './DateTime';

export class TransactionRepository {
  private transactions: Transaction[] = [];

  public constructor(private dateTime: DateTime) {
    this.dateTime = dateTime;
  }

  public addDeposit(amount: number) {
    const transaction = new Transaction(this.dateTime.todayToString(), amount);
    this.transactions.push(transaction);
  }

  public addWithdraw(amount: number) {
    const transaction = new Transaction(this.dateTime.todayToString(), -amount);
    this.transactions.push(transaction);
  }

  public getAllTransactions() {
    return this.transactions;
  }
}
