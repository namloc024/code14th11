var request;
var $current;
var cache = {};
var $frame = $('cattum');
var $thumbs = $('.thumb');

function crossfade($img) {
    if ($current){
        $current.stop().fadeOut('slow');
    }
    $img.css({
        marginLeft: -$img.with() / 2,
        marginTop: -$img.height() / 2
    });
    $img.stop().fadeTo('slow', 1);
    $scurrent = img;
}
$(document).on('click', 'thumb', function(e)){
    var $img,
        src = this.href;
        request = src;

    e.prevenDefault();
    $thumbs.removeClass('active');
    $(this).addClass('active');

    if(cache.hasOwnProperty(src)) {
        if(cache[src].isloading === false){
            srossfade(cache[src].$img);
        }
    }else{
        $img = $('<img/>');
        cache[src] = {
            $img: $img,
            isLoading: true
        };
        $img.on('load', function()){
            $img.hide();
            $frame.removeClass('is-loading').append($img);
            cacche[src].isloading = false;
            if(request === src) {
                crossfade($img);
            }
        };
        $frame.addClass('is-Loading');
        $frame.attr({
            'src': src,
            'alt': this.title || ''
        });
    }
}
$('.thumb').eq(0).click();