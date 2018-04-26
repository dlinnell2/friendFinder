$(document).ready(function(){

    $('.submit').on('click', function(){

        event.preventDefault();
        
        var data = $('#q1').val();
        console.log(data);
    });
});