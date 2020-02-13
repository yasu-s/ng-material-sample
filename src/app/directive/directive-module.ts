import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';

import { MatStepperNextIf, MatStepperPreviousIf, MatStepperSelectedIndexTwoWayDirective } from './stepper';
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
        MatStepperSelectedIndexTwoWayDirective,
    ],
    declarations: [
        MatStepperNextIf,
        MatStepperPreviousIf,
        MatDialogForceClose,
        MatPaginatorDataSource,
        MatStepperSelectedIndexTwoWayDirective,
    ],
})
export class CustomDirectiveModule {}
