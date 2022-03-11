import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {ParticipantService} from '../../services/participant.service';

@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.page.html',
  styleUrls: ['./update-participant.page.scss'],
})
export class UpdateParticipantPage implements OnInit {

    participantFormGroup: FormGroup;
    @Input() index: any;
    @Input() part: any;

    constructor(private modalCtrl: ModalController,private _formBuilder: FormBuilder, private participant: ParticipantService) {
    }

    ngOnInit() {
        console.log(this.part);
        this.participantFormGroup = this._formBuilder.group({
            nom: [this.part.nom],
            email: [this.part.email]
        });
    }


    updateParticipant() {
        this.participant.updateParticipant(this.index, this.participantFormGroup.value);
        this.modalCtrl.dismiss();
    }

}
