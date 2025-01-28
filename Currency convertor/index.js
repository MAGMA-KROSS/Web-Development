
const countryKeys = Object.keys(countryList);

for (let index = 0; index < countryKeys.length; index++) {
    const opt = document.createElement('option');
    const countryCode = countryKeys[index];
    if (countryCode === "INR") {
        opt.selected = true;
    }
    opt.innerHTML = countryKeys[index];  
    document.querySelector("#to").appendChild(opt);
}

for (let index = 0; index < countryKeys.length; index++) {
    const opt = document.createElement('option');
    const countryCode = countryKeys[index];
    if (countryCode === "USD") {
        opt.selected = true;
    }
    opt.innerHTML = countryKeys[index];
    document.querySelector("#from").appendChild(opt);  
}




document.querySelector("#from").addEventListener("change", (evt) => {
    const countryCode = Object.values(countryList)[Object.keys(countryList).indexOf(evt.target.value)];

    document.querySelector(".from img").src = `https://flagsapi.com/${countryCode}/flat/64.png`;
  });
document.querySelector("#to").addEventListener("change", (evt) => {
    const countryCode = Object.values(countryList)[Object.keys(countryList).indexOf(evt.target.value)];
    document.querySelector(".to img").src = `https://flagsapi.com/${countryCode}/flat/64.png`;
  });

const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";



document.querySelector(".btn").addEventListener("click", async (evt) => {
    evt.preventDefault();
    
    const fromCountryCode = document.querySelector("#from").value.toLowerCase();
    const toCountryCode = document.querySelector("#to").value.toLowerCase();
    const amount = document.querySelector("#amt").value;
    
    console.log(`From Country Code: ${fromCountryCode}`);
    console.log(`To Country Code: ${toCountryCode}`);

    async function rate() {
        let url = `https://2024-03-06.currency-api.pages.dev/v1/currencies/${fromCountryCode}.json`;
        let response = await fetch(url);
        let data = await response.json();
        
        if (!data[fromCountryCode] || !data[fromCountryCode][toCountryCode]) {
            throw new Error("Exchange rate not available.");
        }

        let exchangeRate = (data[fromCountryCode][toCountryCode])*amount;
        console.log(`Exchange Rate: ${exchangeRate}`);

        document.querySelector(".CurrRate").innerHTML = `${amount} ${fromCountryCode.toUpperCase()} = ${exchangeRate.toFixed(2)} ${toCountryCode.toUpperCase()}`;
    }
    rate();
});






