
import { Account } from '../src/Account';
import { TransactionRepository } from '../src/TransactionRepository';
import { Transaction } from '../src/Transaction';
import { PrinterStatement } from '../src/PrinterStatement';
import { DateTime } from '../src/DateTime';
import * as bankConsole from '../src/BankConsole';

describe('Account transaction', () => {
  const dateTime: DateTime = new DateTime();
  const transactionRepository: TransactionRepository = new TransactionRepository(dateTime);
  const printerStatement: PrinterStatement = new PrinterStatement();
  const account: Account = new Account(transactionRepository, printerStatement);

  it('#deposit should store a deposit transaction', () => {
    spyOn(transactionRepository, 'addDeposit');
    account.deposit(1000);
    expect(transactionRepository.addDeposit).toHaveBeenCalledWith(1000);
  })

  it('#withDraw should store a withdrawal transaction', () => {
    spyOn(transactionRepository, 'addWithdraw');
    account.withdraw(100);
    expect(transactionRepository.addWithdraw).toHaveBeenCalledWith(100);
  })

  it('#printStatement should print a statement', () => {
    const transactions: Transaction[] = [];
    spyOn(transactionRepository, 'getAllTransactions').and.returnValue(transactions);
    spyOn(printerStatement, 'print');
    account.printStatement();
    expect(printerStatement.print).toHaveBeenCalledWith(transactions);
  })
})


