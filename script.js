// script.js (Shared JavaScript for Calculator)
function calculateEffectiveAge() {
    const age = parseInt(document.getElementById('age').value);
    const smokingYears = parseInt(document.getElementById('smoking-years').value) || 0;
    const cigarettesDay = parseInt(document.getElementById('cigarettes-day').value) || 0;
    const drugType = document.getElementById('drug-type').value;
    const drugYears = parseInt(document.getElementById('drug-years').value) || 0;

    if (isNaN(age) || age < 0) {
        alert('Please enter a valid age.');
        return;
    }

    let effectiveAge = age;
    effectiveAge += smokingYears * 0.5;  // Example: 0.5 years added per smoking year
    effectiveAge += (cigarettesDay / 20) * smokingYears;  // Example: 1 pack/day adds 1 year

    if (drugType !== 'none') {
        effectiveAge += drugYears * (drugType === 'marijuana' ? 0.2 : 1);  // Example multipliers
    }

    document.getElementById('result').innerHTML = `Your effective biological age is approximately ${effectiveAge.toFixed(1)} years.`;
}