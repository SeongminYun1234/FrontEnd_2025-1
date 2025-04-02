function getNumbers() {
    const numbers = new Set();
  
    while (numbers.size < 6) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNum);
    }
  
    return Array.from(numbers);
  }
  
  console.log(getNumbers()); // 예시 출력: [12, 34, 7, 25, 40, 3]
  