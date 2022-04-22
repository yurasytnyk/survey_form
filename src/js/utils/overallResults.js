export function overallResults(answers) {
  return Object.entries(
    answers.reduce((acc, { className, value }) => {
      if (!acc[className]) {
        acc[className] = { total: 1, value: parseInt(value, 10) };
        
        return acc;
      }
      
      return {
        ...acc,
        [className]: {
          total: acc[className].total + 1,
          value: (acc[className].value || 0) + parseInt(value, 10),
        }
      };
    }, {})
  );
}
