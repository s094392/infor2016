  $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 6,
		min: new Date(2000,1,1),
   		max: new Date(2003,12,31)
    });

    $(document).ready(function() {
        $('select').material_select();
    });