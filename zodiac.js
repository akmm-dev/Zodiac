function getHoroscope(birthDate) {
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1;

    // Determine the Zodiac sign based on the birth date
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
        return "Aries";
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
        return "Taurus";
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
        return "Gemini";
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
        return "Cancer";
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
        return "Leo";
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
        return "Virgo";
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
        return "Libra";
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
        return "Scorpio";
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
        return "Sagittarius";
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
        return "Capricorn";
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
        return "Aquarius";
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
        return "Pisces";
    else
        throw new Error("Invalid birth date.");
}

// Usage example
let birthDay = document.getElementById('birthday');
let ZodiacName;
birthDay.addEventListener('change', () => {
    const birthDate = new Date(birthDay.value); // Replace with the desired birth date
    try {
        const zodiacSign = getHoroscope(birthDate);
        ZodiacName = `${zodiacSign}`
        // console.log(ZodiacName);
    } catch (error) {
        console.error(error.message);
    }
    document.querySelector('.btn').disabled = false;
})

function getChineseZodiac(birthYear) {
    const startYear = 1900; // Start year of the Chinese zodiac cycle
    const zodiacSigns = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];
    const offset = (birthYear - startYear) % 12; // Calculate the offset from the start year

    // Determine the Chinese zodiac sign based on the offset
    const zodiacSign = zodiacSigns[offset];
    return zodiacSign;
}

// Usage example

let birthday = document.getElementById('birthday');
let ChineseZodiac;
birthday.addEventListener('change', () => {
    const birthYear = new Date(birthday.value).getFullYear(); // Replace with the desired birth year
    const chineseZodiac = getChineseZodiac(birthYear);
    ChineseZodiac = chineseZodiac;
});

function getZodiac(){
    document.querySelector('.body').style.display = 'none';
    document.querySelector('.next-body').style.display = 'block';
    getData();
}
async function getData(){
    let response = await fetch('/Zodiac.json');
    let data = await response.json();
    for (let i = 0; i < data.ZodiacSignsDetail.length; i++) { 
        if (data.ZodiacSignsDetail[i].Name == ZodiacName) { 

            document.querySelector('header').innerHTML = `
            <img src="${data.ZodiacSignsDetail[i].ZodiacSignImageUrl}" alt="">
            <h1>${data.ZodiacSignsDetail[i].Name}</h1>
            `
            document.querySelector('.details').innerHTML =
                `<img src="${data.ZodiacSignsDetail[i].ZodiacSign2ImageUrl}" alt="">
            <div class="detail">
                <p>Element : ${data.ZodiacSignsDetail[i].Element}</p>
                <p>မြန်မာလ  : ${data.ZodiacSignsDetail[i].MyanmarMonth}</p>
                <p>Chinese : ${ChineseZodiac}</p>
                <p>Energy  : ${data.ZodiacSignsDetail[i].Energy}</p>

            </div>
                `;
            

            for (let t = 0; t < data.ZodiacSignsDetail[i].Traits.length; t++) {
                let traits = data.ZodiacSignsDetail[i].Traits;

                document.querySelector('.card').innerHTML += `
            <div class="traits">
                    <p>${traits[t].Name}</p>
                    <div class="traitname">
                        <div class="traitbar b${t}">${traits[t].Percentage}%</div>
                    </div>
                </div>`
                
            
                document.querySelector(`.b${t}`).style = `width : ${traits[t].Percentage}%`;
            }
            
        }
    }
}