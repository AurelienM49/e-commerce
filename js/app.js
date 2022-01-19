const days = document.getElementById('days');
const hours = document.getElementById('hours');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const daystxt = document.getElementById('daystxt');
const hourstxt = document.getElementById('hourstxt');
const mintxt = document.getElementById('mintxt');
const sectxt = document.getElementById('sectxt');
const timer = document.getElementById('timer')

const currentDate = new Date().getFullYear();
const dropFinish = new Date('January 19 2022 18:11:45');
const txtSolde = document.getElementById('solde')



function updCountodwn() {
    const currentTime = new Date();
    const diff = dropFinish - currentTime

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    min.innerHTML = m < 10 ? '0' + m : m;
    sec.innerHTML = s < 10 ? '0' + s : s;

    if (d<0 && h<0 && m<0 && s<0){
        days.style.display="none"
        hours.style.display="none"
        min.style.display="none"
        sec.style.display="none"
        daystxt.style.display="none"
        hourstxt.style.display="none"
        mintxt.style.display="none"
        sectxt.style.display="none"
        txtSolde.style.display="none"
    }


}

setInterval(updCountodwn, 1000);