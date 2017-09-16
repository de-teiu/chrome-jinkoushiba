$(function () {
    'use strict';
    var colorCdList = ['#c6e48b', '#7bc96f', '#239a3b', '#196127'];

    $('.day').each(function () {
        $(this).attr('fill', colorCdList[Math.floor(Math.random() * colorCdList.length)]);
    });

    $('.f4.text-normal.mb-2').each(function () {
        if ($(this).text().match(/contributions/)) {
            $(this).text('A lot of contributions in the last year');
        }
    });
});
