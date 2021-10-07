import {Component, OnInit} from '@angular/core';
import {AddParticicpantPage} from "../modals/add-particicpant/add-particicpant.page";
import {ModalController} from "@ionic/angular";
import {ParticipantService} from "../services/participant.service";

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

}
