import {Injectable} from '@angular/core';
import {Participant} from '../models/participant.model';

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
                    nom,
                    email,
                };
            this.participants.push(participant);
            console.log(this.participants);
        }
    }

    deleteParticipant(id: any) {
        this.participants.splice(id, 1);
    }

    updateParticipant(id: any, participant) {
        this.participants[id] = participant;
    }
}
