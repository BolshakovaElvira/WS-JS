$(document).ready(function () {
  
    $.getJSON("drivers.json", 
            function (data) {
        let driver = '';
        $.each(data, function (key, value) {
            driver += '<tr>';
            driver += '<td>' + 
                value.person.firstname + '</td>';

            driver += '<td>' + 
                value.person.lastname + '</td>';

            driver += '<td>' + 
                value.car.manufacturer + '</td>';

            driver += '<td>' + 
                value.car.model + '</td>';
            driver += '<td>' + 
            value.car.year + '</td>';

            driver += '</tr>';
        });
          
        $('#table').append(driver);
    });
});