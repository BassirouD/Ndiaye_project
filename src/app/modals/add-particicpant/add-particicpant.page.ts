import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ParticipantService} from "../../services/participant.service";

@Component({
    selector: 'app-add-particicpant',
    templateUrl: './add-particicpant.page.html',
    styleUrls: ['./add-particicpant.page.scss'],
})
export class AddParticicpantPage implements OnInit {

    participantFormGroup: FormGroup;
    id = 0;

    constructor(private modalCtrl: ModalController,private _formBuilder: FormBuilder, private participant: ParticipantService) {
    }

    ngOnInit() {
        this.participantFormGroup = this._formBuilder.group({
            nom: [''],
            email: ['']
        });
    }

    addParticipant(){
        this.id = this.id + 1
        this.participant.addParticipant(
            this.id,
            this.participantFormGroup.value.nom,
            this.participantFormGroup.value.email,
        );
        this.modalCtrl.dismiss();
    }

    logAffiche(){
        console.log(this.participantFormGroup.value);
    }


}
