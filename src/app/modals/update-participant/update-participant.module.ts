import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateParticipantPageRoutingModule } from './update-participant-routing.module';

import { UpdateParticipantPage } from './update-participant.page';
import {AddParticicpantPageRoutingModule} from "../add-particicpant/add-particicpant-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      MatFormFieldModule,
      MatMenuModule,
      MatIconModule,
      MatDialogModule,
      MatInputModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatTableModule,
      MatFormFieldModule,
      MatAutocompleteModule,
      UpdateParticipantPageRoutingModule
  ],
  declarations: [UpdateParticipantPage]
})
export class UpdateParticipantPageModule {}
