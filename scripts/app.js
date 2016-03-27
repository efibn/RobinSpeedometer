
$(document).ready(function () {
    'use strict';

    var meterImg = $('div.meter-div>img');
    var cssClass = 'img-background-color-orange';
    var lastClassUsed = cssClass;
    meterImg.addClass(cssClass);

    var rand = function () {

        var randSpeed = Math.floor(Math.random() * 181);

        return randSpeed;
    };

    setInterval(function () {

        var randSpeed = rand();

        var randDeg = (randSpeed - 90) * 1.33333;

        $('#dial-arrow').animate({ randDeg: randDeg },
            {
                step: function (randValue, fx) {
                    $(this).css('transform', 'rotate(' + randValue + 'deg)');
                },
                duration: 'slow',
                complete: function () {

                    if (randSpeed >= 0 && randSpeed <= 60) {
                        cssClass = 'img-background-color-green'; // Green
                    }
                    else if (randSpeed >= 61 && randSpeed <= 120) {
                        cssClass = 'img-background-color-orange'; // Orange
                    }
                    else if (randSpeed >= 121 && randSpeed <= 180) {
                        cssClass = 'img-background-color-red'; // Red
                    }

                    if (lastClassUsed != cssClass) {
                        meterImg.removeClass(lastClassUsed);
                        meterImg.addClass(cssClass);
                        lastClassUsed = cssClass;
                    }

                }
            , randSpeed, meterImg, cssClass, lastClassUsed
            });

    }, 1000);


});