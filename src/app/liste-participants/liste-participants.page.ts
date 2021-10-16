import {Component, OnInit} from '@angular/core';
import {AddParticicpantPage} from "../modals/add-particicpant/add-particicpant.page";
import {ModalController} from "@ionic/angular";
import {ParticipantService} from "../services/participant.service";
import {UpdateParticipantPage} from "../modals/update-participant/update-participant.page";

@Component({
    selector: 'app-liste-participants',
    templateUrl: './liste-participants.page.html',
    styleUrls: ['./liste-participants.page.scss'],
})
export class ListeParticipantsPage implements OnInit {

    listeParticipants: any;

    constructor(private modalCtrl: ModalController, private particantSrv: ParticipantService) {
    }

    ngOnInit() {
        console.log('-------------------------------', this.particantSrv.participants);
    }

    async add() {
        const modal = await this.modalCtrl.create({
            component: AddParticicpantPage,
            cssClass: 'cal-modal'
        });

        modal.onDidDismiss()
            .then((data) => {
                this.listeParticipants = this.particantSrv.participants;
                console.log('gaghahahha',this.listeParticipants)
            })

        return modal.present();
    }

    async update(i,participant) {
        const modal = await this.modalCtrl.create({
            component: UpdateParticipantPage,
            cssClass: 'cal-modal',
            componentProps: {
                'part': participant,
                'index': i
            }
        });

        modal.onDidDismiss()
            .then((data) => {
                this.listeParticipants = this.particantSrv.participants;
                console.log('gaghahahha',this.listeParticipants)
            })

        return modal.present();
    }

    delete(id) {
        console.log(id)
        this.particantSrv.deleteParticipant(id);
    }



}
