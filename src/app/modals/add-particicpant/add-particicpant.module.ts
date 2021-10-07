import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AddParticicpantPageRoutingModule} from './add-particicpant-routing.module';

import {AddParticicpantPage} from './add-particicpant.page';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddParticicpantPageRoutingModule,
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

    ],
    declarations: [AddParticicpantPage]
})
export class AddParticicpantPageModule {
}
