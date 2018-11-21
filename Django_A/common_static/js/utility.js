//Scroll to Top
(function ($) {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
})(jQuery);

$(document).ready(function () {

    $('#btn-to-top').on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    $('.modalLink').modal({
        trigger: '.modalLink',          // id or class of link or button to trigger modal
        olay: 'div.overlay',             // id or class of overlay
        modals: 'div.modal',             // id or class of modal
        animationEffect: 'slideDown',   // overlay effect | slideDown or fadeIn | default=fadeIn
        animationSpeed: 400,            // speed of overlay in milliseconds | default=400
        moveModalSpeed: 'slow',         // speed of modal movement when window is resized | slow or fast | default=false
        background: 'a2d3cd',           // hexidecimal color code - DONT USE #
        opacity: 0.7,                   // opacity of modal |  0 - 1 | default = 0.8
        openOnLoad: false,              // open modal on page load | true or false | default=false
        docClose: true,                 // click document to close | true or false | default=true
        closeByEscape: true,            // close modal by escape key | true or false | default=true
        moveOnScroll: false,             // move modal when window is scrolled | true or false | default=false
        resizeWindow: true,             // move modal when window is resized | true or false | default=false
        video: 'http://player.vimeo.com/video/2355334?color=eb5a3d',    // enter the url of the video
        videoClass: 'video',             // class of video element(s)
        close: '.closeBtn'               // id or class of close button
    });
});


$(document).ready(function () {


});

/*********
 * 生成教室图
 */

(function ($) {

    const o = {
        one: {
            A: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
            B: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
            C: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
        },
        two: {
            A: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
            B: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
            C: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
        },
        three: {
            A: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
            B: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
            C: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
        },
        four: {
            A: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
            B: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
            C: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
        },
        five: {
            A: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
            B: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
            C: [0, 0, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 0, 0, 0],
        }
    };
    var index_of_floor = 0;
    for (let key in o) { //楼
        index_of_floor++; //加一楼
        for (let key_m in o[key]) { //区
            var $a = $('<div></div>').addClass('row');
            var $b = $('<h3></h3>').addClass('text-primary');
            var area_num = key_m;
            var $c = $('<div class="bg-light"></div>');
            o[key][key_m].forEach(function (value, index) { //教室单元
                var teach_num = (index + 1).toString();
                if (teach_num.length === 1) {
                    teach_num = '0' + teach_num;
                }
                var $item = $('<a></a>').attr('href', '#' + area_num + index_of_floor + teach_num)
                    .attr('id', '1' + area_num + index_of_floor + teach_num)
                    .text(area_num + index_of_floor + teach_num);
                if (value === 0) { //低
                    $item.addClass('btn btn-success');
                } else if (value === 1) { //中
                    $item.addClass('btn btn-warning');
                } else {  //高
                    $item.addClass('btn btn-danger');
                }
                $c.append($item);
            });
            $b.text(key_m + '区:');

            if (key === 'one') {
                $a.append($b).append($c);
                $('#tab-one div.container').append($a);
            }
            else if (key === 'two') {
                $a.append($b).append($c);
                $('#tab-two div.container').append($a);
            }
            else if (key === 'three') {
                $a.append($b).append($c);
                $('#tab-three div.container').append($a);
            }
            else if (key === 'four') {
                $a.append($b).append($c);
                $('#tab-four div.container').append($a);
            }
            else if (key === 'five') {
                $a.append($b).append($c);
                $('#tab-five div.container').append($a);
            }
        }

    }
    ;
    <!-- 点击标签显示内容 -->
    $('.nav-tabs a').each(function (index, element) {
        $(element).on('click',
            function () {
                const $item = $('#tab-content > div');
                $item.each(
                    function (index, element) {
                        if ($(element).hasClass("show") === false) {
                            $(element).addClass('show');
                            $('a[href="#tab-one"]').removeClass('active');
                        }
                    }
                )
            }
        );
    });
})(jQuery);

/***********
 * 点击显示内容
 */
loop = function ($) {
    $('div.bg-light > a').each(
        function (index, element) {
            if (typeof($(element).attr('href')) !== 'undefined') {
                $(element).attr('href', '#modal2');
                $(element).addClass('modalLink');
            }
            /***数据库不完整，无法执行更新****
             $.get('/ajax_dict/', {'class': $(element).attr("id").toLowerCase()}, function (result) {
                let rate = result.current_num / result.max_num;
                if (rate < 0.3) $(element).attr('class', 'btn btn-success');
                else if (rate < 0.6) $(element).attr('class', 'btn btn-warning');
                else $(element).attr('class', 'btn btn-danger');
            });
             ***/
        }
    );
};

loop(jQuery);

(function ($) {

    $('div.bg-light > a').each(
        function (index, element) {
            $(element).click(function () {
                $.get("/ajax_dict/", {'class': $(element).attr("id").toLowerCase()}, function (ret) {
                    $(".booking-details span:eq(0)").text($(element).attr("id"));
                    $(".booking-details span:eq(1)").text(ret['time']);
                    $(".booking-details span:eq(2)").text(ret.max_num);
                    $(".booking-details span:eq(3)").text(ret.current_num);
                    $(".booking-details span:eq(4)").text(ret.current_num / ret.max_num * 100 + "%");
                    console.log("seat-map-selected");
                    console.log(ret.map);
                    $seat_map = $("<div></div>");
                    var sc = $seat_map.seatCharts({
                        map: ret.map,
                        seats: {
                            a: {
                                value: 100,
                                category: '座位',
                                class: '',
                            },
                            u: {
                                value: 0,
                                category: '墙',
                                class: '',
                            }
                        },
                        naming: {
                            top: false,
                            left: false,
                        },
                        legend: { //定义图例
                            node: $('#legend'),
                            items: [
                                ['a', 'available', '可选座'],
                                ['a', 'unavailable', '不可用'],
                                ['a', 'selected', '已占用']
                            ]
                        },
                        click: function () {
                            if (this.status() == 'available') {
                                return 'available';
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

                    sc.get(['1_2', '4_4', '4_5', '6_6', '6_7', '8_5', '8_6', '8_7', '8_8', '10_1', '10_2']).status('selected');
                    $s = $("#seat-map");
                    $s.html($seat_map);
                    $s.addClass('mx-0 mt-2');
                    $s.prepend("<div class=\"front\">黑板</div>");
                    /**
                     if($s.childNodes.length > 6){
                        $s.removeChild($s.lastChild);
                    }
                     */
                    $s.removeChild($s.lastChild);
                });
            })
        }
    );
})(jQuery);

//循环执行 5分钟内刷新数据
window.setInterval(loop(jQuery), 300000);


$(function () {
    var arr = $("div div").toArray().sort(function (a, b) {
        return $(a).html() - $(b).html();
    })
    var temp = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if ($(temp).html() == $(arr[i]).html()) {
            $(arr[i]).remove();
        }
        else {
            temp = arr[i];
        }
    }
});