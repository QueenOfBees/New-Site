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
    handleInput();
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
                    $(".booking-details span:eq(4)").text('  ' + parseInt(ret.current_num * 100 / ret.max_num) + "%");
                    console.log("seat-map-selected");
                    console.log(ret.map);
                    var id = $(element).attr('id');
                    var format_map = [];
                    console.log(id[1]);
                    if (id[1] == 'A') {
                        for (var i = 0; i < 10; i++) {
                            format_map.push('aaa_aaaaaaa_aaa');
                        }
                    }
                    else if (id[1] == 'B') {
                        for (var i = 0; i < 6; i++) {
                            format_map.push('aa_aaaa_aa');
                        }
                    }
                    else {
                        for (var i = 0; i < 5; i++) {
                            format_map.push('aa_aaa_aa');
                        }
                    }
                    var result_array = [];
                    ret.map.forEach(
                        function (value, index) {
                            var value2array = value.split('');
                            value2array.forEach(
                                function (v, i) {
                                    if (v === 'u') {
                                        result_array.push((index + 1).toString() + '_' + (i + 1).toString())
                                    }
                                }
                            )
                        }
                    );
                    console.log(result_array);
                    var $seat_map = $("#seat-map");
                    var sc = $seat_map.seatCharts({
                        map: format_map,
                        seats: {
                            a: {
                                value: 100,
                                category: '座位',
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
                                ['a', 'selected', '已占用'],
                            ]
                        },
                        click: function () {
                            if (this.status() === 'available') {
                                return 'available';
                            }
                            else if (this.status() === 'selected') {
                                alert('已经有人了');
                                return 'selected';
                            }
                            else if (this.status() === 'unavailable') {
                                alert('该座位不可用');
                                return 'unavailable';
                            }
                            else {
                                return this.style();
                            }

                        }//点击事件

                    });
                    //已用的座位

                    sc.get(result_array).status('selected');
                    $('#modal2').find('#legend:eq(1)').css('display', 'none');
                });
            })
        }
    );
})(jQuery);

//循环执行 5分钟内刷新数据
window.setInterval(loop(jQuery), 300000);

(function ($) {
    $("#carousel-1").carousel({
        interval: 5000,
        wrap: true,
    });
})(jQuery);

(function (e) {
    function scrollTopToDom($scrollDom, $firstDom, $scrollToDom) {
        var topOffsetPx = $firstDom.offset().top;
        var domOffsetPx = $scrollToDom.offset().top;
        $scrollDom.animate({
            scrollTop: domOffsetPx - topOffsetPx
        }, 500)
    }

    $('#about a').click(function () {
        if (location.pathname !== '/index/') {
            window.location.pathname = '/index/';
        }
        else {
            scrollTopToDom($('html, body'), $(this), $('.title:eq(1)'));
        }
    });
    $('#contact_us').click(function () {
        scrollTopToDom($('html, body'), $(this), $('#where'));
    })
})(jQuery);





