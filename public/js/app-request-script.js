$(document).ready(function(){

    $("#requestButton").click(function() {
        $.ajax({
            type: "GET",
            url: "http://healthyheart.dennisiscool.club/" + $("#url").val(),
            data: {
                token: "2TO3c3rhn3rS5U2G"
            },
            dataType: 'json',
        }).then(function (data){

            $("#result").html((JSON.stringify(data)))
        });
    })});


