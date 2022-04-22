class StatsCalculator {
  calculateRate(
    answers, 
    multiplier = 1,
  ) {
    return (answers[1].value / answers[1].total * multiplier).toFixed(1);
  }

  calculateAvgRate(answers) {
    return answers
      .reduce((acc, curr) => (acc += curr.value / answers.length), 0)
      .toFixed(1);
  }
}

export const statsCalculator = new StatsCalculator();
