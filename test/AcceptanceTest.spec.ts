
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

  it('should print statement containning all transactions', () => {

    spyOn(dateTime, 'todayToString').and.returnValues('01/08/2019', '02/08/2019', '10/08/2019');
    spyOn(bankConsole, 'printLine').and.callThrough();

    account.deposit(1000);
    account.withdraw(200);
    account.deposit(300);
    account.printStatement();

    expect(bankConsole.printLine).toHaveBeenCalledWith('DATE | AMOUNT | BALANCE');
    expect(bankConsole.printLine).toHaveBeenCalledWith('10/08/2019 | 300.00 | 1100.00');
    expect(bankConsole.printLine).toHaveBeenCalledWith('02/08/2019 | -200.00 | 800.00');
    expect(bankConsole.printLine).toHaveBeenCalledWith('01/08/2019 | 1000.00 | 1000.00');
  })
})


