function receiveSubmit() {
    let selectedXValues = Array.from(document.querySelectorAll('.btn_group input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    let yValue = document.querySelector('#y_value').value;
    let rValueOption = document.querySelector('input[name="r_value"]:checked');
    let rValue = rValueOption ? rValueOption.value : '';

    const date = new Date();
    const offset = date.getTimezoneOffset();

    if (validateValues(selectedXValues, yValue, rValue)) {
        selectedXValues.forEach(xValue => {
            $.ajax({
                type: 'GET',
                url: '../src/php/index.php',
                data: {
                    'x': parseInt(xValue.trim()),
                    'y': parseFloat(yValue.trim()),
                    'r': parseFloat(rValue.trim()),
                    'utc': offset
                },
                success: function (response) {
                    document.querySelector('#table > tbody').innerHTML = response;
                    console.log("Значение x: " + xValue + " успешно отправлено.");
                },
                error: function (data) {
                    alert("Произошла ошибка при отправке значения x: " + xValue);
                }
            });
        });
    }
}