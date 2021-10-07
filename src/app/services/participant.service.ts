import {Injectable} from '@angular/core';
import {Participant} from "../models/participant.model";

@Injectable({
    providedIn: 'root'
})
export class ParticipantService {

    participants: Participant[] = [];

    constructor() {
    }

    addParticipant(id: any,nom: string, email: string) {
        if (origin) {
            const participant: Participant =
                {
                    'nom': nom,
                    'email': email,
                }
            this.participants.push(participant);
            console.log(this.participants)
        }
    }
}
