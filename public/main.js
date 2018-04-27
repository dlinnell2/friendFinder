$(document).ready(function(){

    var complete;

    $('.submit').on('click', function(){

        event.preventDefault();
        
        // Check if all items have been completed
        validate()
        
        if (complete){

            // Create user object to send to server
            var user = {
                name: $('#userName').val().trim(),
                image: $('#userPhoto').val().trim(),
                answers: [
                    $('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val(),
                ]
            };

            // Send to server, send response to client
            $.post('/api/friends', user, function(data){
                if(data){

                    $('#modalTitle').text(data.name);
                    $('#modalImage').attr('src', data.image);
                    $('#resultModal').modal('toggle');

                }
            })

            
        } else {
            alert('Please enter all fields')
        }
    });

    function validate(){
        complete = true
        
        $('.form-control').each(function(){
            if ($(this).val() === ''){
                complete = false;
            }
        })

        $('.chosen').each(function(){
            if ($(this).val() === 'null'){
                complete = false;
            }
        })

        return complete;
    }

    // Clear our all values when the user closes modal
    $('.close').on('click', function(){
        $('.chosen').val('');
        $('.form-control').val('');
    });

});