import {
    Directive,
    Input,
    OnInit,
    Optional,
    ElementRef,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

/**
 * MatDialog force close Directive
 */
@Directive({
    selector: '[mat-dialog-force-close]'
})
export class MatDialogForceClose implements OnInit {

// #region fields

    /**  */
    @Input('mat-dialog-force-close')
    set dialogResult(value: any) {
        if (value && this.dialogRef) {
            this.dialogRef.close(value);
        }
    }

// #endregion

// #region init/destroy

    /**
     *
     * @param dialogRef
     * @param _elementRef
     * @param _dialog
     */
    constructor(
        @Optional() public dialogRef: MatDialogRef<any>,
        private _elementRef: ElementRef,
        private _dialog: MatDialog) {}

    /**
     *
     */
    ngOnInit(): void {
        if (!this.dialogRef) {
            this.dialogRef = this.getClosestDialog(this._elementRef, this._dialog.openDialogs)!;
        }
    }

// #endregion

// #region methods

    /**
     *
     * @param element
     * @param openDialogs
     */
    private getClosestDialog(element: ElementRef, openDialogs: MatDialogRef<any>[]) {
        let parent: HTMLElement | null = element.nativeElement.parentElement;
        while (parent && !parent.classList.contains('mat-dialog-container')) {
            parent = parent.parentElement;
        }
        return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;
    }

// #endregion

}
