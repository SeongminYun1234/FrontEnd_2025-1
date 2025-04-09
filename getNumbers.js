const resultCheckFrame = document.querySelector('.result_check_frame');
let currentWinningNumbers = [];
let savedPurchaseNumbers = [];
const total_price = document.querySelector(".total_price");

function getNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        numbers.add(num);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function getColorByIndex(index) {
    const colors = ['yellow', 'blue', 'red', 'gray', 'green', 'yellow'];
    return colors[index % colors.length];
}

function renderBalls(numbers) {
    return numbers.map((num, index) => `<div class="ball ${getColorByIndex(index)}">${num}</div>`).join('');
}

function generatePurchaseNumbers() {
    const count = parseInt(document.getElementById('buyCount').value);
    savedPurchaseNumbers = [];
    document.getElementById('purchased_numbers_area').innerHTML = '';
    for (let i = 0; i < count; i++) {
        savedPurchaseNumbers.push(getNumbers());
    }
    total_price.innerHTML = `총 금액: ${(count * 1000).toLocaleString()}원(1장당 1,000원)`;
}

function generateWinningNumbers() {
    resultCheckFrame.style.display = "block";
    if (savedPurchaseNumbers.length === 0) {
        alert('먼저 로또를 구매해주세요.');
        return;
    }
    currentWinningNumbers = getNumbers();

    const ballDivs = document.querySelectorAll('#winning_numbers .ball');
    currentWinningNumbers.forEach((num, i) => {
        ballDivs[i].textContent = num;
    });

    document.getElementById('display_winning_numbers').innerHTML = renderBalls(currentWinningNumbers);
    const area = document.getElementById('purchased_numbers_area');
    area.innerHTML = '';

    savedPurchaseNumbers.forEach(nums => {
        const match = nums.filter(n => currentWinningNumbers.includes(n)).length;
        const resultText = match === 6 ? '결과: 6개 일치 - 당첨' : `결과: ${match}개 일치`;
        const html = `
                    <div class="result_box">
                        <div class="circle_number">${renderBalls(nums)}</div>
                        <div class="match_result_box">${resultText}</div>
                    </div>
                `;
        area.innerHTML += html;
    });
}