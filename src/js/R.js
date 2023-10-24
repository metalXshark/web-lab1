
function changeR() {
    let checkedBox = document.querySelector('#r_value input[type="checkbox"]:checked');
    let rField = checkedBox ? checkedBox : { value: '' };

    if (rField.value === '') {
        document.querySelectorAll('#r').forEach(element => {
            element.innerHTML = 'R';
        });

        document.querySelectorAll('#-r').forEach(element => {
            element.innerHTML = '-R';
        });

        document.querySelectorAll('#r2').forEach(element => {
            element.innerHTML = 'R/2';
        });

        document.querySelectorAll('#-r2').forEach(element => {
            element.innerHTML = '-R/2';
        });
    } else {
        let rFloat = parseFloat(rField.value);

        document.querySelectorAll('#r').forEach(element => {
            element.innerHTML = rFloat.toString();
        });

        document.querySelectorAll('#-r').forEach(element => {
            element.innerHTML = (-rFloat).toString();
        });

        document.querySelectorAll('#r2').forEach(element => {
            element.innerHTML = (rFloat / 2).toString();
        });

        document.querySelectorAll('#-r2').forEach(element => {
            element.innerHTML = (-rFloat / 2).toString();
        });

        localStorage.setItem('selectedR', rField.value);

        document.querySelectorAll('#r_value input[type="checkbox"]:not(:checked)').forEach(element => {
            element.checked = false;
        });
    }
}

function deselectOthers(currentCheckbox) {
    let checkboxes = document.querySelectorAll('input[name="r_value"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox !== currentCheckbox) {
            checkbox.checked = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const selectedR = localStorage.getItem('selectedR');

    if (selectedR) {
        document.querySelector(`input[name="r_value"][value="${selectedR}"]`).checked = true;
        changeR();
    }
});