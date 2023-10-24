const checkboxes = document.querySelectorAll('.btn_group input[type="checkbox"]');
const xValuesInput = document.querySelector('#x_value');

const savedXValues = localStorage.getItem('savedXValues');
if (savedXValues) {
    const xValuesArray = savedXValues.split(',');
    checkboxes.forEach(checkbox => {
        if (xValuesArray.includes(checkbox.value)) {
            checkbox.checked = true;
        }
    });
    xValuesInput.value = savedXValues;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateXValues);
});

function updateXValues() {
    const selectedValues = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    xValuesInput.value = selectedValues.join(',');
    localStorage.setItem('savedXValues', xValuesInput.value);
}