import { BankConsole } from '../src/BankConsole';
import { Transaction } from '../src/Transaction';
import { PrinterStatement } from '../src/PrinterStatement';

describe('Printer Statement', () => {

  const console: BankConsole = new BankConsole();
  const printerStatement: PrinterStatement = new PrinterStatement(console);

  it('should always print header', () => {
    const transactions: Transaction[] = [];
    spyOn(console, 'printLine');
    printerStatement.print(transactions);
    expect(console.printLine).toHaveBeenCalledWith('DATE | AMOUNT | BALANCE');
  })

  it('should print transactions', () => {
    const transactions: Transaction[] = [];
    transactions.push(new Transaction('01/08/2019', 1000));
    transactions.push(new Transaction('02/08/2019', -200));
    transactions.push(new Transaction('10/08/2019', 300));

    spyOn(console, 'printLine').and.callThrough();
    printerStatement.print(transactions);

    // Check how many times the spy was called
    expect(console.printLine).toHaveBeenCalledTimes(4);
    expect(console.printLine).toHaveBeenCalledWith('DATE | AMOUNT | BALANCE');
    expect(console.printLine).toHaveBeenCalledWith('10/08/2019 | 300.00 | 1100.00');
    expect(console.printLine).toHaveBeenCalledWith('02/08/2019 | -200.00 | 800.00');
    expect(console.printLine).toHaveBeenCalledWith('01/08/2019 | 1000.00 | 1000.00');
  })
})
