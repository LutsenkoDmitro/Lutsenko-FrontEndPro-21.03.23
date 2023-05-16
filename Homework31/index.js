const registrationForm = document.getElementById('registration-form');
const resultsContainer = document.getElementById('registration-results');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        firstName: registrationForm.elements['first-name'].value,
        lastName: registrationForm.elements['last-name'].value,
        birthdate: registrationForm.elements.birthdate.value,
        gender: registrationForm.elements.gender.value,
        city: registrationForm.elements.city.value,
        address: registrationForm.elements.address.value,
        lang: []
    };

    const langCheckboxes = registrationForm.elements.lang;
    for (let i = 0; i < langCheckboxes.length; i++) {
        if (langCheckboxes[i].checked) {
            formData.lang.push(langCheckboxes[i].value);
        }
    }

    const table = document.createElement("table");
    const row1 = table.insertRow();
    const cell1 = row1.insertCell();
    const cell2 = row1.insertCell();
    cell1.textContent = "Ім'я";
    cell2.textContent = firstName;

    const row2 = table.insertRow();
    const cell3 = row2.insertCell();
    const cell4 = row2.insertCell();
    cell3.textContent = "Прізвище";
    cell4.textContent = lastName;

    const row3 = table.insertRow();
    const cell5 = row3.insertCell();
    const cell6 = row3.insertCell();
    cell5.textContent = "Дата народження";
    cell6.textContent = birthdate;

    const row4 = table.insertRow();
    const cell7 = row4.insertCell();
    const cell8 = row4.insertCell();
    cell7.textContent = "Стать";
    cell8.textContent = gender;

    const row5 = table.insertRow();
    const cell9 = row5.insertCell();
    const cell10 = row5.insertCell();
    cell9.textContent = "Місто";
    cell10.textContent = city;

    const row6 = table.insertRow();
    const cell11 = row6.insertCell();
    const cell12 = row6.insertCell();
    cell11.textContent = "Адреса";
    cell12.textContent = address;

    const row7 = table.insertRow();
    const cell13 = row7.insertCell();
    const cell14 = row7.insertCell();
    cell13.textContent = "Мови, якими володієте";
    cell14.textContent = languages.join(", ");

    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
});
