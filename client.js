$(document).ready(onReady);

function onReady() {
    $('#add-employee').on('click', function() {
        // assign employee info to variables
        let firstName = $('#first-name').val();
        let lastName = $('#last-name').val();
        let id = $('#id').val();
        let title = $('#title').val();
        let anualSalary = $('#anual-salary').val();
        // check if there are no inputs in form
        if (firstName === '' || lastName === '' || title === '') {
            alert('You must provide all inputs!');
            return 0;
        } else if (id <= 0 || anualSalary <= 0) {
            alert('You must provide numbers greater than 0!')
            return 0;
        }
        // add employee info to table
        $('#employee-table tbody').append(`
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td class="salary">${anualSalary}</td>
                <td><button class="delete-employee">Delete</button></td>
            </tr>
        `);
        // add anual salary to total monthly costs
        $('.collection').val('');
        anualSalary = Number(anualSalary);
        let totalMonthlyCosts = $('#monthly-costs').text();
        totalMonthlyCosts = Number(totalMonthlyCosts);
        totalMonthlyCosts += (anualSalary / 12);
        $('#monthly-costs').text(totalMonthlyCosts.toFixed(2));
        // check if total costs if over 20k
        if (totalMonthlyCosts > 20000) {
            $('footer h2').addClass('over-budget');
        }
    });
    // delete button
    $('#employee-table').on('click', '.delete-employee', function() {
        let removeSalary = $(this).parent().siblings('.salary').text();
        removeSalary = Number(removeSalary);
        let totalMonthlyCosts = $('#monthly-costs').text();
        totalMonthlyCosts = Number(totalMonthlyCosts);
        totalMonthlyCosts -= (removeSalary / 12);
        $('#monthly-costs').text(totalMonthlyCosts.toFixed(2));
        $(this).parent().parent().remove();
        if (totalMonthlyCosts < 20000) {
            $('footer h2').removeClass('over-budget');
        }
    });
}