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
        }

        // Avatar
        const speedBG = 4;
        const speedMain = 2;
        const speedFG = 10;

        const avatarBG = document.querySelector('.avatar_layer_bg');
        const avatarMain = document.querySelector('.avatar_layer_main');
        const avatarFG = document.querySelector('.avatar_layer_fg');

        window.addEventListener('mousemove', function(e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;  
           
            avatarBG.style.transform = 'translate(-' + x * speedBG + 'px, -' + y * speedBG + 'px)';
            avatarMain.style.transform = 'translate(-' + x * speedMain + 'px, -' + y * speedMain + 'px)';
            avatarFG.style.transform = 'translate(-' + x * speedFG + 'px, -' + y * speedFG + 'px)';
        });
    });

    window.addEventListener('resize', windowResizeEvent);
// window.onload = () => {
//     let aboutMeContent = document.getElementsByClassName("about_me_content")[0];
//     let coldDeathElem = document.getElementById("coldDeath");
//     coldDeathElem.appendChild(aboutMeContent);
// }
}