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

birthday.addEventListener('change', () => {
    const birthYear = new Date(birthday.value).getFullYear(); // Replace with the desired birth year
    const chineseZodiac = getChineseZodiac(birthYear);
    console.log(`Chinese zodiac sign: ${chineseZodiac}`);
})