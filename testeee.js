const transactions = [
  {
    income: 2300,
    outcome: 100
  },
  {
    income: 200,
    outcome: 200
  },
  {
    income: 100,
    outcome: 100
  }
]

function dale(transaction) {
  const balance = transaction.reduce(
    (accumulatorValue, currentValue) => {
      accumulatorValue.income += currentValue.value;
      accumulatorValue.total += currentValue.value;
      accumulatorValue.outcome += currentValue.value;

      return accumulatorValue;
    },
    { income: 0, outcome: 0, total: 0 },
  );

  return balance || null;
}
console.log(dale(transactions))
