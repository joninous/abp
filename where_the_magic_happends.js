/*

 THIS MATERIAL IS TOP SECRET

 ESPECIALLY FOR A.B.P. ELITE FORCE RECRUITS

 THE PENALTY OF UNAUTHORIZED VIEWING IS DEATH!


 AND COME ON, MAN. DON'T SPOIL THE SURPRISE. ;)































































































































*/

function unlock(id, unlockHours, unlockMinutes, accomplishedHours, accomplishedMinutes) {
    var printNumber = function (number) {
        if (number < 10) {
            return '0' + number;
        }
        else {
            return number;
        }
    }

    var year = window.location.search.indexOf('showall') !== -1 ? 2015 : 2016;
    var month = 5; // June
    var day = 11;
    var now = new Date(Date.now());

    var unlockTime = new Date(now.getTime());
    unlockTime.setYear(year);
    unlockTime.setMonth(month);
    unlockTime.setDate(day);
    unlockTime.setHours(unlockHours);
    unlockTime.setMinutes(unlockMinutes);
    unlockTime.setSeconds(0);
    unlockTime.setMilliseconds(0);

    if (now.getTime() > unlockTime.getTime()) {
        $(id).find('p, .hide-this').show();
    }
    else {
        $(id).append('<p class="unlock">This mission unlocks at <strong>' + printNumber(unlockHours) + ':' + printNumber(unlockMinutes) + '</strong>.</p>');
    }

    var accTime = new Date(now.getTime());
    accTime.setYear(year);
    accTime.setMonth(month);
    accTime.setDate(day);
    accTime.setHours(accomplishedHours);
    accTime.setMinutes(accomplishedMinutes);
    accTime.setSeconds(0);
    accTime.setMilliseconds(0);

    if (now.getTime() > accTime.getTime()) {
        $(id).append('<div class="accomplished">MISSION ACCOMPLISHED</div>');
    }
}

$(document).ready(function () {
    $('.mission p, .hide-this').hide();

    unlock('#welcome',      7, 00, 11, 00);
    unlock('#physical',    10, 00, 12, 00);
    unlock('#refuel',      12, 00, 14, 00);
    unlock('#weapons',     13, 00, 14, 00);
    unlock('#squad',       16, 00, 18, 15);
    unlock('#debriefing',  18, 00, 23, 59);
});
