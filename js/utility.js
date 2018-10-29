//Scroll to Top
(function( $ ) {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
})(jQuery);

$(document).ready(function(){

    $('#btn-to-top').on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    $('.modalLink').modal({
        trigger: '.modalLink',          // id or class of link or button to trigger modal
        olay:'div.overlay',             // id or class of overlay
        modals:'div.modal',             // id or class of modal
        animationEffect: 'slideDown',   // overlay effect | slideDown or fadeIn | default=fadeIn
        animationSpeed: 400,            // speed of overlay in milliseconds | default=400
        moveModalSpeed: 'slow',         // speed of modal movement when window is resized | slow or fast | default=false
        background: 'a2d3cd',           // hexidecimal color code - DONT USE #
        opacity: 0.7,                   // opacity of modal |  0 - 1 | default = 0.8
        openOnLoad: false,              // open modal on page load | true or false | default=false
        docClose: true,                 // click document to close | true or false | default=true
        closeByEscape: true,            // close modal by escape key | true or false | default=true
        moveOnScroll: true,             // move modal when window is scrolled | true or false | default=false
        resizeWindow: true,             // move modal when window is resized | true or false | default=false
        video: 'http://player.vimeo.com/video/2355334?color=eb5a3d',    // enter the url of the video
        videoClass:'video',             // class of video element(s)
        close:'.closeBtn'               // id or class of close button
    });
});


$(document).ready(function() {

    var sc = $('#seat-map').seatCharts({
        map: [  //座位图
            'aaaaaaaaaa',
            'aaaaaaaaaa',
            '__________',
            'aaaaaaaa__',
            'aaaaaaaaaa',
            'aaaaaaaaaa',
            'aaaaaaaaaa',
            'aaaaaaaaaa',
            'aaaaaaaaaa',
            'aa__aa__aa'
        ],
        seats: {
            a:{
                value: 100,
                category: '座位',
                class : '',
            },
        },
        naming : {
            top : false,
            left:false,
        },
        legend : { //定义图例
            node : $('#legend'),
            items : [
                [ 'a', 'available',   '可选座' ],
                [ 'a', 'unavailable', '不可用'],
                ['a','selected', '已占用' ]
            ]
        },
        click: function () {
            if (this.status() == 'available') {
                return 'selected';
            }
            else if (this.status() == 'selected') {
                return 'selected';
            }
            else if (this.status() == 'unavailable') {
                return 'unavailable';
            }
            else {
                return this.style();
            }

        }//点击事件

    });
    //已用的座位

    sc.get(['1_2', '4_4','4_5','6_6','6_7','8_5','8_6','8_7','8_8', '10_1', '10_2']).status('selected');

});


