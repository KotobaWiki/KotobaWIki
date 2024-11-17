
import { OpinionsHandler } from './OpinionsHandler.js';

export class OpinionsHandlerMustache {
    constructor(templateId, outputElementId) {
        this.template = document.getElementById(templateId).innerHTML;
        this.outputElement = document.getElementById(outputElementId);
        this.opinionsHandler = new OpinionsHandler(); 
    }

    renderOpinions() {
        const opinions = this.opinionsHandler.getOpinions();
        this.outputElement.innerHTML = ""; //avoiding duplicate

        opinions.forEach(opinion => {
            const rendered = Mustache.render(this.template, opinion);
            this.outputElement.innerHTML += rendered; // add new one
        });
    }

    addOpinion(opinionData) {
        this.opinionsHandler.saveOpinion(opinionData); //add to local storage
        this.renderOpinions();
    }
}