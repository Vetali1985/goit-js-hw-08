import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time"

    player.on('timeupdate', throttle(timeUpdate,1000));

function timeUpdate(data) {
localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))
}
    const timePause = JSON.parse(localStorage.getItem("videoplayer-current-time"));

player.setCurrentTime(timePause).then(function (seconds) {
    
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
