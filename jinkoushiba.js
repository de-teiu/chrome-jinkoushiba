$(function () {
    'use strict';
    var colorCdList = ['#c6e48b', '#7bc96f', '#239a3b', '#196127'];

    $('.day').each(function () {
        $(this).attr('fill', colorCdList[Math.floor(Math.random() * colorCdList.length)]);
    });
});
