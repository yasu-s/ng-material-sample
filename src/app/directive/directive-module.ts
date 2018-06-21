import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatStepperModule, MatDialogModule } from '@angular/material';

import { MatStepperNextIf } from './stepper';

@NgModule({
    imports: [
        CommonModule,
        MatCommonModule,
        MatStepperModule,
        MatDialogModule,
    ],
    exports: [
        MatStepperNextIf,
    ],
    declarations: [
        MatStepperNextIf
    ],
})
export class CustomDirectiveModule {}
