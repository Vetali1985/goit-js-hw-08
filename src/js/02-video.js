
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time"

    player.on('timeupdate', throttle(timeUpdate,1000));

function timeUpdate(data) {
localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}
    const timePause = JSON.parse(localStorage.getItem(STORAGE_KEY)).seconds;

player.setCurrentTime(timePause).then(function (seconds) {
    
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error
            break;
    }
});
