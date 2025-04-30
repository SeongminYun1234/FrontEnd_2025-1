async function searchCountry() {
    const input = document.getElementById("countryInput").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "🔍 검색 중...";

    if (!input) {
        resultDiv.innerHTML = "<p class='error'>나라 이름을 입력하세요.</p>";
        return;
    }

    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${input}`);
        if (!res.ok) throw new Error("검색 실패");

        const data = await res.json();
        const country = data[0];

        const capital = country.capital?.[0] || "정보 없음";
        const flag = country.flags?.png;

        resultDiv.innerHTML = `
          <p><strong>국가:</strong> ${country.name.common}</p>
          <p><strong>수도:</strong> ${capital}</p>
          <img src="${flag}" alt="국기" />
        `;
    } catch (error) {
        resultDiv.innerHTML = "<p class='error'>해당 국가를 찾을 수 없습니다.</p>";
    }
}