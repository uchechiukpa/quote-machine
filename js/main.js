$(document).ready(function () {

    var quote;
    var author;
    
    function getQuote() {
    
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function (response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                $('.quote').text(quote).hide().fadeIn(1000);
                if (author) {
                    $('.author').text("~" + author).hide().fadeIn(1000);
                } else {
                    $('.author').text("~unknown").hide().fadeIn(1000)
               }
            }
        });

    
        //   var url = 'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/';
        // $.getJSON(url, function(data) {
        //   $(".quote").html(data.quoteText);
        // });
        }
        getQuote();
        $(".btn").on("click", function () {
            getQuote();
            // var i;
            // for (i = 0, i < quote.length; i++){
            //     $('.quote').fadeIn(3000);
            // }
            // $(".quote").text(quote).fadeIn({queue: false, duration: 'slow'});
            // $(".quote").text(quote).animate({ top: '-10px' }, 'slow');
             
        });

    });
