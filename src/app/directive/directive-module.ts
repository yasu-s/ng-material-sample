import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatStepperModule, MatDialogModule } from '@angular/material';

import { MatStepperNextIf, MatStepperPreviousIf } from './stepper';
import { MatDialogForceClose } from './dialog';

@NgModule({
    imports: [
        CommonModule,
        MatCommonModule,
        MatStepperModule,
        MatDialogModule,
    ],
    exports: [
        MatStepperNextIf,
        MatStepperPreviousIf,
        MatDialogForceClose,
    ],
    declarations: [
        MatStepperNextIf,
        MatStepperPreviousIf,
        MatDialogForceClose,
    ],
})
export class CustomDirectiveModule {}
