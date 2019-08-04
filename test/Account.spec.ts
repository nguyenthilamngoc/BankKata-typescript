
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
    //given
    //when
    spyOn(transactionRepository, 'addDeposit');
    account.deposit(1000);
    //then
    expect(transactionRepository.addDeposit).toHaveBeenCalledWith(1000);
  })

  it('#withDraw should store a withdrawal transaction', () => {
    //given
    //when
    spyOn(transactionRepository, 'addWithdraw');
    account.withdraw(100);
    //then
    expect(transactionRepository.addWithdraw).toHaveBeenCalledWith(100);
  })

  it('#printStatement should print a statement', () => {
    //given
    //when
    const transactions: Transaction[] = [];
    spyOn(transactionRepository, 'getAllTransactions').and.returnValue(transactions);
    spyOn(printerStatement, 'print');
    account.printStatement();
    //then
    expect(printerStatement.print).toHaveBeenCalledWith(transactions);
  })
})


