const checkbox = document.getElementById("cbw");
const inputurl = document.getElementById("inputurl");
const kwcheckbox = document.getElementById("kw");
const kwinput = document.getElementById("kwinput");
const send = document.getElementById("send");
const form = document.getElementById('form');
import { OpinionsHandlerMustache } from './OpinionsHandlerMustache.js';

window.addEventListener("load", function() {
    checkbox.checked = false;
    inputurl.style.display = "none";
    inputurl.value = "";
    kwcheckbox.checked = false;
    kwinput.style.display = "none";
    kwinput.value = "";
});

checkbox.addEventListener("change", function() {
    inputurl.style.display = checkbox.checked ? "block" : "none";
});

kwcheckbox.addEventListener("change",function(){
    kwinput.style.display = kwcheckbox.checked ? "block" : "none";
});

document.addEventListener('DOMContentLoaded', () => {
    const opinionRenderer = new OpinionsHandlerMustache('opinion-template', 'outputopinion');
    opinionRenderer.renderOpinions();

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('Name').value;
    const opinion = document.getElementById('fb').value;
    const email = document.getElementById('Email').value; //not visible
    const who = document.querySelector('input[name="Who"]:checked')?.value || 'Guest';
    const kwrds = document.getElementById('kwinput').value || 'I love KotobaWiki';
    const url = document.getElementById('inputurl').value || 'fig/giphy.gif';


    //date
    const date = new Intl.DateTimeFormat('en-GB',{ 
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
}).format(new Date());
    //date    

    const opinionData = { name, opinion, who, kwrds, email, url, date};
    opinionRenderer.addOpinion(opinionData);


    form.reset();   
});
});