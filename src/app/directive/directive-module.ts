import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatCommonModule, MatStepperModule, MatDialogModule,
    MatTableModule, MatPaginatorModule
} from '@angular/material';

import { MatStepperNextIf, MatStepperPreviousIf } from './stepper';
import { MatDialogForceClose } from './dialog';
import { MatPaginatorDataSource } from './paginator';

@NgModule({
    imports: [
        CommonModule,
        MatCommonModule,
        MatStepperModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
    ],
    exports: [
        MatStepperNextIf,
        MatStepperPreviousIf,
        MatDialogForceClose,
        MatPaginatorDataSource,

    ],
    declarations: [
        MatStepperNextIf,
        MatStepperPreviousIf,
        MatDialogForceClose,
        MatPaginatorDataSource,
    ],
})
export class CustomDirectiveModule {}
