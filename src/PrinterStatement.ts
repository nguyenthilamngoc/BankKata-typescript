import { Transaction } from './Transaction';
import { BankConsole } from './BankConsole';

export class PrinterStatement {
  public readonly HEADER_STATEMENT = "DATE | AMOUNT | BALANCE";

  constructor(private console: BankConsole) {
    this.console = console;
  }

  public print(transactions: Transaction[]) {
    this.console.printLine(this.HEADER_STATEMENT);

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
      this.console.printLine(line);
    });
  }

}
