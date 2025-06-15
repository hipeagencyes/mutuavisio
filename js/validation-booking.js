$(document).ready(function(){
    $('#send_message').click(function(e){
        e.preventDefault();

        var error = false;
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();

        $('#name,#email,#phone,#message').click(function(){
            $(this).removeClass("error_input");
        });

        // Hide error message on new attempt
        $('#error_message').hide();

        // Validation
        if(name.length == 0){
            error = true;
            $('#name').addClass("error_input");
        }
        if(email.length == 0 || email.indexOf('@') == -1){
            error = true;
            $('#email').addClass("error_input");
        }
        if(phone.length == 0){
            error = true;
            $('#phone').addClass("error_input");
        }

        if(error == false){
            $('#send_message').attr({'disabled' : 'true', 'value' : 'Enviando...' });

            $.post("booking.php", $("#booking_form").serialize(), function(result){
                if(result.trim() == 'sent'){
                    $('#booking_form').remove();
                    $('#success_message_col').fadeIn(500);
                }else{
                    $('#error_message').fadeIn(500);
                    $('#send_message').removeAttr('disabled').attr('value', 'Pedir cita');
                }
            });
        }
    });
});