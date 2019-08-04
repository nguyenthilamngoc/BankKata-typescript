import * as bankConsole from '../src/BankConsole';
import { Transaction } from '../src/Transaction';
import { PrinterStatement } from '../src/PrinterStatement';

describe('Printer Statement', () => {

  const printerStatement: PrinterStatement = new PrinterStatement();

  it('should always print header', () => {
    //given
    const transactions: Transaction[] = [];
    const firstLine: String = 'DATE | AMOUNT | BALANCE';
    spyOn(bankConsole, 'printLine');
    //when
    printerStatement.print(transactions);
    //then
    expect(bankConsole.printLine).toHaveBeenCalledWith(firstLine);
  })

  it('should print transactions', () => {
    //given
    const transactions: Transaction[] = [];
    transactions.push(new Transaction('01/08/2019', 1000));
    transactions.push(new Transaction('02/08/2019', -200));
    transactions.push(new Transaction('10/08/2019', 300));
    spyOn(bankConsole, 'printLine').and.callThrough();
    //when
    printerStatement.print(transactions);
    //then
    expect(bankConsole.printLine).toHaveBeenCalledTimes(4);
    expect(bankConsole.printLine).toHaveBeenCalledWith('DATE | AMOUNT | BALANCE');
    expect(bankConsole.printLine).toHaveBeenCalledWith('10/08/2019 | 300.00 | 1100.00');
    expect(bankConsole.printLine).toHaveBeenCalledWith('02/08/2019 | -200.00 | 800.00');
    expect(bankConsole.printLine).toHaveBeenCalledWith('01/08/2019 | 1000.00 | 1000.00');
  })
})
