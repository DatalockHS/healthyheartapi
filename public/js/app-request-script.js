$(document).ready(function(){

    $("#requestButton").click(function() {
        $.ajax({
            type: "GET",
            url: "http://healthyheart.dennisiscool.club/" + $("#url").val(),
            data: {
                token: ""
            },
            dataType: 'json',
        }).then(function (data){

            $("#result").html((JSON.stringify(data)))
        });
    })});


