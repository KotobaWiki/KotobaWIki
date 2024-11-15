
export class OpinionsHandler {
    constructor(Key = 'opinions') {
        this.storageKey = Key;
    }

    getOpinions() {
        return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    }

    
    saveOpinion(opinion) {
        const opinions = this.getOpinions();
        opinions.push(opinion);
        localStorage.setItem(this.storageKey, JSON.stringify(opinions));
    }
}