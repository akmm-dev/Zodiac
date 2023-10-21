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
	// Start year of the Chinese zodiac cycle
    const zodiacAnimals = ['MonkeyMonkey🐒', 'Rooster🐓', 'Dog🐕', 'Pig🐖', 'Rat🐀', 'Ox🐂', 'Tiger🐅', 'Rabbit🐇', 'Dragon🐉', 'Snake🐍', 'Horse🐎', 'Sheep🐑'];
    const offset = (birthYear) % 12; // Calculate the offset from the start year

    // Determine the Chinese zodiac sign based on the offset
    const zodiacSign = zodiacAnimals[offset];
    return zodiacSign;
}

// Usage example

let birthday = document.getElementById('birthday');
let ChineseZodiac;
birthday.addEventListener('change', () => {
	var birthYear = new Date(birthday.value).getFullYear();

	let bDate = new Date(birthday.value).getDate();
	let bMonth = new Date(birthday.value).getMonth() + 1;

	if ((bMonth === 1 && bDate > 0 ) || (bMonth === 2 && bDate < 10)) {
		birthYear -= 1;
	}
	console.log(birthYear);
     // Replace with the desired birth year
    const chineseZodiac = getChineseZodiac(birthYear);
    ChineseZodiac = chineseZodiac;
});

function getZodiac(){
    document.querySelector('.body').style.display = 'none';
    document.querySelector('.next-body').style.display = 'block';
    getData();
}
async function getData(){
    let data = {
	"ZodiacSignsDetail": [
		{
			"Id": 1,
			"Name": "Aries",
			"MyanmarMonth": "တန်ခူး",
			"ZodiacSignImageUrl": "./images/zodiac-signs/h1.svg",
			"ZodiacSign2ImageUrl": "./images/zodiac-signs-2/aries.png",
			"Dates": "March 21 - April 19",
			"Element": "Fire 🔥",
			"Energy": "Strong, Emotion, Enthusiastic, Passionate, Temper-mental, Achiever, Interesting",
			"ElementImageUrl": "images/elements/fire.png",
			"Traits": [
				{
					"Name": "Courageous",
					"Percentage": 80
				},
				{
					"Name": "Confident",
					"Percentage": 70
				},
				{
					"Name": "Energetic",
					"Percentage": 90
				},
				{
					"Name": "Impulsive",
					"Percentage": 60
				},
				{
					"Name": "Passionate",
					"Percentage": 75
				}
			]
		},
		{
			"Id": 2,
			"Name": "Taurus",
			"MyanmarMonth": "ကဆုန်",
			"ZodiacSignImageUrl": "./images/zodiac-signs/h2.svg",
			"ZodiacSign2ImageUrl": "./images/zodiac-signs-2/taurus.png",
			"Dates": "April 20 - May 20",
			"Element": "Earth 🪨",
			"Energy":"Dependable, Grounded, Reliable, Materialistic, Loyal, Practical",
			"ElementImageUrl": "images/elements/earth.png",
			"Traits": [
				{
					"Name": "Reliable",
					"Percentage": 70
				},
				{
					"Name": "Patient",
					"Percentage": 80
				},
				{
					"Name": "Practical",
					"Percentage": 75
				},
				{
					"Name": "Stubborn",
					"Percentage": 85
				},
				{
					"Name": "Sensual",
					"Percentage": 65
				}
			]
		},
		{
			"Id": 3,
			"Name": "Gemini",
			"MyanmarMonth": "နယုန်",
			"ZodiacSignImageUrl": "./images/zodiac-signs/h3.svg",
			"ZodiacSign2ImageUrl": "./images/zodiac-signs-2/gemini.png",
			"Dates": "May 21 - June 20",
			"Element": "Air 🌬️",
			"Energy":"Powerful, Creativity, Fun, Ideas, Adventurous, Exciting",
			"ElementImageUrl": "images/elements/air.png",
			"Traits": [
				{
					"Name": "Adaptable",
					"Percentage": 75
				},
				{
					"Name": "Curious",
					"Percentage": 85
				},
				{
					"Name": "Intellectual",
					"Percentage": 80
				},
				{
					"Name": "Inconsistent",
					"Percentage": 60
				},
				{
					"Name": "Social",
					"Percentage": 90
				}
			]
		},
		{
			"Id": 4,
			"Name": "Cancer",
			"MyanmarMonth": "ဝါဆို",
			"ZodiacSignImageUrl": "./images/zodiac-signs/h4.svg",
			"ZodiacSign2ImageUrl": "./images/zodiac-signs-2/cancer.png",
			"Dates": "June 21 - July 22",
			"Element": "Water 🌊",
			"Energy":"Refreshing, Mysterious, Intuitive, Ambitious, Intense, Dreamy, Sensitive",
			"ElementImageUrl": "images/elements/water.png",
			"Traits": [
				{
					"Name": "Loyal",
					"Percentage": 85
				},
				{
					"Name": "Emotional",
					"Percentage": 75
				},
				{
					"Name": "Intuitive",
					"Percentage": 80
				},
				{
					"Name": "Moody",
					"Percentage": 70
				},
				{
					"Name": "Protective",
					"Percentage": 90
				}
			]
		},
		{
			"Id": 5,
			"Name": "Leo",
			"MyanmarMonth": "ဝါခေါင်",
			"ZodiacSignImageUrl": "./images/zodiac-signs/h5.svg",
			"ZodiacSign2ImageUrl": "./images/zodiac-signs-2/leo.png",
			"Dates": "July 23 - August 22",
			"Element": "Fire 🔥",
			"Energy": "Strong, Emotion, Enthusiastic, Passionate, Temper-mental, Achiever, Interesting",
			"ElementImageUrl": "images/elements/fire.png",
			"Traits": [
				{
					"Name": "Generous",
					"Percentage": 80
				},
				{
					"Name": "Creative",
					"Percentage": 85
				},
				{
					"Name": "Warm-hearted",
					"Percentage": 75
				},
				{
					"Name": "Arrogant",
					"Percentage": 65
				},
				{
					"Name": "Dominant",
					"Percentage": 70
				}
			]
		},
		{
			"Id": 6,
			"Name": "Virgo",
			"MyanmarMonth": "တော်သလင်း",
			"ZodiacSignImageUrl": "./images/zodiac-signs/h6.svg",
			"ZodiacSign2ImageUrl": "./images/zodiac-signs-2/virgo.png",
			"Dates": "August 23 - September 22",
			"Element": "Earth 🪨",
			"Energy":"Dependable, Grounded, Reliable, Materialistic, Loyal, Practical",
			"ElementImageUrl": "images/elements/earth.png",
			"Traits": [
				{
					"Name": "Analytical",
					"Percentage": 90
				},
				{
					"Name": "Practical",
					"Percentage": 85
				},
				{
					"Name": "Modest",
					"Percentage": 70
				},
				{
					"Name": "Overcritical",
					"Percentage": 80
				},
				{
					"Name": "Reliable",
					"Percentage": 75
				}
			]
		},
		{
			"Id": 7,
			"Name": "Libra",
			"MyanmarMonth": "သီတင်းကျွတ်",
			"ZodiacSignImageUrl": "./images/zodiac-signs/h7.svg",
			"ZodiacSign2ImageUrl": "./images/zodiac-signs-2/libra.png",
			"Dates": "September 23 - October 22",
			"Element": "Air 🌬️",
			"Energy":"Powerful, Creativity, Fun, Ideas, Adventurous, Exciting",
			"ElementImageUrl": "images/elements/air.png",
			"Traits": [
				{
					"Name": "Diplomatic",
					"Percentage": 75
				},
				{
					"Name": "Harmonious",
					"Percentage": 80
				},
				{
					"Name": "Idealistic",
					"Percentage": 70
				},
				{
					"Name": "Indecisive",
					"Percentage": 65
				},
				{
					"Name": "Charming",
					"Percentage": 85
				}
			]
		},
		{
			"Id": 8,
			"Name": "Scorpio",
			"MyanmarMonth": "တန်ဆောင်မုန်း",
			"ZodiacSignImageUrl": "./images/zodiac-signs/h8.svg",
			"ZodiacSign2ImageUrl": "./images/zodiac-signs-2/scorpio.png",
			"Dates": "October 23 - November 21",
			"Element": "Water 🌊",
			"Energy":"Refreshing, Mysterious, Intuitive, Ambitious, Intense, Dreamy, Sensitive",
			"ElementImageUrl": "images/elements/water.png",
			"Traits": [
				{
					"Name": "Passionate",
					"Percentage": 85
				},
				{
					"Name": "Magnetic",
					"Percentage": 80
				},
				{
					"Name": "Resolute",
					"Percentage": 75
				},
				{
					"Name": "Jealous",
					"Percentage": 70
				},
				{
					"Name": "Secretive",
					"Percentage": 60
				}
			]
		},
		{
			"Id": 9,
			"Name": "Sagittarius",
			"MyanmarMonth": "နတ်တော်",
			"ZodiacSignImageUrl": "./images/zodiac-signs/h9.svg",
			"ZodiacSign2ImageUrl": "./images/zodiac-signs-2/saggittarius.png",
			"Dates": "November 22 - December 21",
			"Element": "Fire 🔥",
			"Energy": "Strong, Emotion, Enthusiastic, Passionate, Temper-mental, Achiever, Interesting",
			"ElementImageUrl": "images/elements/fire.png",
			"Traits": [
				{
					"Name": "Adventurous",
					"Percentage": 90
				},
				{
					"Name": "Optimistic",
					"Percentage": 85
				},
				{
					"Name": "Straightforward",
					"Percentage": 80
				},
				{
					"Name": "Impatient",
					"Percentage": 70
				},
				{
					"Name": "Versatile",
					"Percentage": 75
				}
			]
		},
		{
			"Id": 10,
			"Name": "Capricorn",
			"MyanmarMonth": "ပြာသို",
			"ZodiacSignImageUrl": "./images/zodiac-signs/h10.svg",
			"ZodiacSign2ImageUrl": "./images/zodiac-signs-2/capricorn.png",
			"Dates": "December 22 - January 19",
			"Element": "Earth 🪨",
			"Energy":"Dependable, Grounded, Reliable, Materialistic, Loyal, Practical",
			"ElementImageUrl": "images/elements/earth.png",
			"Traits": [
				{
					"Name": "Ambitious",
					"Percentage": 80
				},
				{
					"Name": "Disciplined",
					"Percentage": 85
				},
				{
					"Name": "Prudent",
					"Percentage": 75
				},
				{
					"Name": "Pessimistic",
					"Percentage": 60
				},
				{
					"Name": "Determined",
					"Percentage": 70
				}
			]
		},
		{
			"Id": 11,
			"Name": "Aquarius",
			"MyanmarMonth": "တပို့တွဲ",
			"ZodiacSignImageUrl": "./images/zodiac-signs/h11.svg",
			"ZodiacSign2ImageUrl": "./images/zodiac-signs-2/aquarius.png",
			"Dates": "January 20 - February 18",
			"Element": "Air 🌬️",
			"Energy":"Powerful, Creativity, Fun, Ideas, Adventurous, Exciting",
			"ElementImageUrl": "images/elements/air.png",
			"Traits": [
				{
					"Name": "Independent",
					"Percentage": 80
				},
				{
					"Name": "Intellectual",
					"Percentage": 85
				},
				{
					"Name": "Unconventional",
					"Percentage": 75
				},
				{
					"Name": "Stubborn",
					"Percentage": 70
				},
				{
					"Name": "Humanitarian",
					"Percentage": 90
				}
			]
		},
		{
			"Id": 12,
			"Name": "Pisces",
			"MyanmarMonth": "တပေါင်း",
			"ZodiacSignImageUrl": "./images/zodiac-signs/h12.svg",
			"ZodiacSign2ImageUrl": "./images/zodiac-signs-2/pisces.png",
			"Dates": "February 19 - March 20",
			"Element": "Water 🌊",
			"Energy":"Refreshing, Mysterious, Intuitive, Ambitious, Intense, Dreamy, Sensitive",
			"ElementImageUrl": "images/elements/water.png",
			"Traits": [
				{
					"Name": "Compassionate",
					"Percentage": 85
				},
				{
					"Name": "Intuitive",
					"Percentage": 80
				},
				{
					"Name": "Artistic",
					"Percentage": 75
				},
				{
					"Name": "Escapist",
					"Percentage": 60
				},
				{
					"Name": "Sensitive",
					"Percentage": 70
				}
			]
		}
	]
}

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
