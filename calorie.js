function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    const activityLevel = parseFloat(document.getElementById('activityLevel').value);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert('Please enter valid values for weight, height, and age.');
        return;
    }

    // Example formula for Basal Metabolic Rate (BMR)
    const bmr = 10 * weight + 6.25 * height - 5 * age;
    const dailyCalories = bmr * activityLevel;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your Daily Caloric Requirement is approximately ${dailyCalories.toFixed(2)} kcal.`;
}
