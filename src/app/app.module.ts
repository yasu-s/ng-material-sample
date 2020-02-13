import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';

import { CustomDirectiveModule } from './directive';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatStepperModule,
        MatDialogModule,
        MatStepperModule,
        CustomDirectiveModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
