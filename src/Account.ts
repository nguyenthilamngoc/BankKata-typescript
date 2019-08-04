import { TransactionRepository } from './TransactionRepository';
import { PrinterStatement } from './PrinterStatement';
export class Account {
  private transactionRepository: TransactionRepository;
  private printerStatement: PrinterStatement;

  constructor(transactionRepository: TransactionRepository, printerStatement: PrinterStatement) {
    this.transactionRepository = transactionRepository;
    this.printerStatement = printerStatement;
  }

  public deposit(amount: number) {
    this.transactionRepository.addDeposit(amount);
  }

  public withdraw(amount: number) {
    this.transactionRepository.addWithdraw(amount);
  }

  public printStatement() {
    this.printerStatement.print(this.transactionRepository.getAllTransactions());
  }
}
