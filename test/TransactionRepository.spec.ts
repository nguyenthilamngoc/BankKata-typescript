import { TransactionRepository } from '../src/TransactionRepository';
import { Transaction } from '../src/Transaction';
import { DateTime } from '../src/DateTime';

describe('Transaction Repository', () => {
  const TODAY = "03 Aug 2019";
  const TODAY_ddMMyyyy = "03/08/2019";
  let transactionRepository: TransactionRepository;

  beforeEach(() => {
    const datetime = new DateTime();
    transactionRepository = new TransactionRepository(datetime);
    spyOn(datetime, 'today').and.returnValue(new Date(TODAY));
  })

  it('#addDeposit should create and store a deposit transaction', () => {
    transactionRepository.addDeposit(1000);
    const transactions = transactionRepository.getAllTransactions();
    expect(transactions.length).toEqual(1);
    expect(transactions[0].getAmount()).toEqual(1000);
    expect(transactions[0].getDate()).toEqual(TODAY_ddMMyyyy);
  })

  it('#addWithdraw should create and store a withdrawal transaction', () => {
    transactionRepository.addWithdraw(100);
    const transactions = transactionRepository.getAllTransactions();
    expect(transactions.length).toEqual(1);
    expect(transactions[0].getAmount()).toEqual(-100);
    expect(transactions[0].getDate()).toEqual(TODAY_ddMMyyyy);
  })
})
