$(document).ready(onReady);

function onReady() {
    $('#add-employee').on('click', function() {
        let firstName = $('#first-name').val();
        let lastName = $('#last-name').val();
        let id = $('#id').val();
        let title = $('#title').val();
        let anualSalary = $('#anual-salary').val();
        $('#employee-table').append(`
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td>${anualSalary}</td>
                <td><button class="delete-employee">Delete</button></td>
            </tr>
        `);
        $('.collection').val('');
        anualSalary = Number(anualSalary);
        let totalMonthlyCosts = $('#monthly-costs').text();
        totalMonthlyCosts = Number(totalMonthlyCosts);
        totalMonthlyCosts += anualSalary;
        $('#monthly-costs').text(totalMonthlyCosts);

        if (totalMonthlyCosts > 20000) {
            $('footer h2').css('background-color', '#EF626C');
        }
    });
    $('#employee-table').on('click', '.delete-employee', function() {
        $(this).parent().parent().remove();
    });
}