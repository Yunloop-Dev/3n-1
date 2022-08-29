const threeNPlusOne = (index) => {
  let result = index;

  let iterations = 0;

  console.time("Время обработки:");

  while (result !== 1) {
    if (result % 2 === 0) {
      result = result / 2;
    } else {
      result = result * 3 + 1;
    }
    iterations++;
  }
  console.log(
    `Отчёт:\n\nВводное число: ${index}\nВсего итераций 4/2/1: ${iterations}`
  );
  console.timeEnd("Время обработки:");
};

threeNPlusOne(500000); // Необходимо написать любое положительное число
