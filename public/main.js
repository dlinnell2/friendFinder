$(document).ready(function(){

    var complete;

    $('.submit').on('click', function(){

        event.preventDefault();
        
        validate()
        
        if (complete){

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

            $.post('/api/friends', user, function(data){
                console.log(data);
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
});