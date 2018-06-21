import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatStepperModule, MatDialogModule } from '@angular/material';

import { MatStepperNextIf } from './stepper';
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
        MatDialogForceClose,
    ],
    declarations: [
        MatStepperNextIf,
        MatDialogForceClose,
    ],
})
export class CustomDirectiveModule {}
