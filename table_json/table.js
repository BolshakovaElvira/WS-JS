$(document).ready(function () {
  
    $.getJSON("drivers.json", 
            function (data) {
        let driver = '';
        $.each(data, function (key, value) {
            driver +=
                `<tr>
                    <td>${value.person.firstname}</td>
                    <td>${value.person.lastname}</td>
                    <td>${value.car.manufacturer}</td>
                    <td>${value.car.model}</td>
                    <td>${value.car.year}</td>
                </tr>`;
        });
          
        $('#table').append(driver);
    });
});