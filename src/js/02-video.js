
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time"
    player.on('timeupdate', throttle(timeUpdate,1000));

function timeUpdate(data) {
     evt.preventDefault();
localStorage.setItem(STORAGE_KEY, JSON.stringify(data))

    console.log(data);

}
// function setCurrentTime(data) {
//     evt.preventDefault();
    
//    }