import { Transaction } from './Transaction';
import { printLine } from './BankConsole';

export class PrinterStatement {
  public readonly HEADER_STATEMENT = "DATE | AMOUNT | BALANCE";

  constructor() {
  }

  public print(transactions: Transaction[]) {
    printLine(this.HEADER_STATEMENT);

    let balance = 0;
    const lines = transactions.map((transaction: Transaction) => {
      balance += transaction.getAmount();
      return transaction.getDate()
        + " | "
        + transaction.getAmount().toFixed(2)
        + " | "
        + balance.toFixed(2)
    });

    lines.reverse().forEach(line => {
      printLine(line);
    });
  }

}
