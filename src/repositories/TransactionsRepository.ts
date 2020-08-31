/* eslint-disable no-param-reassign */
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const balance = this.transactions.reduce(
      (accumulatorValue, currentValue: Transaction): Balance => {
        if (currentValue.type === 'income') {
          accumulatorValue.income += currentValue.value;
          accumulatorValue.total += currentValue.value;
        } else {
          accumulatorValue.outcome += currentValue.value;
          accumulatorValue.total += currentValue.value * -1;
        }

        return accumulatorValue;
      },
      { income: 0, outcome: 0, total: 0 },
    );

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
