/**
 * Created by m3ik on 03.08.2019.
/* -----------------------------------------------
 * DebugMyDick｡　出れ！(ﾉ>_<)ﾉ
 * ----------------------------------------------- */

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (!isMobile) {
    coldDeath.load('coldDeath', '/js/coldDeath.json');

    let vColdDeathElem = null;
    let vCheckSizeElem = null;

    const windowResizeEvent = (event) => {
        vColdDeathElem.style.height = (vCheckSizeElem.offsetHeight + 80) + "px";
    };

    document.addEventListener("DOMContentLoaded", function () {
        vColdDeathElem = document.getElementById("coldDeath");
        vCheckSizeElem = document.getElementById("coldDeathCheckSize");

        if (vColdDeathElem && vCheckSizeElem) {
            windowResizeEvent();
            // Dispath resize event for trigger coldDeath.js: `window.addEventListener('resize'...`
            window.dispatchEvent(new Event('resize'));
        }

        // Avatar
        const speedBG = 4;
        const speedMain = 2;
        const speedFG = 10;

        const avatarBG = document.querySelector('.avatar_layer_bg');
        const avatarMain = document.querySelector('.avatar_layer_main');
        const avatarFG = document.querySelector('.avatar_layer_fg');

        window.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;  
            const xBGNew = x * speedBG,
            xFGNew = x * speedFG,
            yBGNew = y * speedBG,
            yFGNew = y * speedFG;
            let xMainNew = x * speedMain * -1 + xBGNew + xFGNew,
            yMainNew = y * speedMain * -1 + yBGNew + yFGNew;
            
            // Fix borders.
            if (xMainNew < 0) {
                xMainNew = 0;
            }

            if (yMainNew < 0) {
                yMainNew = 0;
            }
           
            avatarBG.style.transform = 'translate(-' + xBGNew + 'px, -' + yBGNew + 'px)';
            avatarMain.style.transform = 'translate(' + xMainNew + 'px, ' + yMainNew + 'px)';
            avatarFG.style.transform = 'translate(-' + xFGNew + 'px, -' + yFGNew + 'px)';
        });
    });

    window.addEventListener('resize', windowResizeEvent);
// window.onload = () => {
//     let aboutMeContent = document.getElementsByClassName("about_me_content")[0];
//     let coldDeathElem = document.getElementById("coldDeath");
//     coldDeathElem.appendChild(aboutMeContent);
// }
}