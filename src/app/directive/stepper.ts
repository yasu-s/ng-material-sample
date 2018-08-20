import {
    Directive, Input, Output, EventEmitter, HostListener, HostBinding,
    OnInit, OnDestroy
} from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material';
import { takeUntil } from 'rxjs/operators';

/**
 * MatStepperNext extension Directive
 */
@Directive({
    selector: 'button[matStepperNextIf]',
    providers: [ { provide: CdkStepper, useExisting: MatStepper } ]
})
export class MatStepperNextIf {

// #region fields

    /**  */
    @HostBinding('type')
    type = 'submit';

    /**  */
    @Input('matStepperNextIf')
    flag = true;

    /**  */
    @Output('matStepperNextElseHandler')
    elseHandler = new EventEmitter<any>();

// #endregion

// #region init/destroy

    /**
     *
     * @param _stepper
     */
    constructor(public _stepper: MatStepper) {}

// #endregion

// #region methods

    /**
     * Button click.
     */
    @HostListener('click')
    onClick(): void {
        if (this.flag)
            this._stepper.next();
        else
            this.elseHandler.emit();
    }

// #endregion

}

/**
 * matStepperPrevious extension Directive
 */
@Directive({
    selector: 'button[matStepperPreviousIf]',
    providers: [ { provide: CdkStepper, useExisting: MatStepper } ]
})
export class MatStepperPreviousIf {

// #region fields

    /**  */
    @HostBinding('type')
    type = 'submit';

    /**  */
    @Input('matStepperPreviousIf')
    flag = true;

    /**  */
    @Output('matStepperPreviousElseHandler')
    elseHandler = new EventEmitter<any>();

// #endregion

// #region init/destroy

    /**
     *
     * @param _stepper
     */
    constructor(public _stepper: MatStepper) {}

// #endregion

// #region methods

    /**
     * Button click.
     */
    @HostListener('click')
    onClick(): void {
        if (this.flag)
            this._stepper.previous();
        else
            this.elseHandler.emit();
    }

// #endregion

}

/**
 * mat-horizontal-stepper Directive
 */
@Directive({
    selector: '[selectedIndexTwoWay]',
    providers: [ { provide: CdkStepper, useExisting: MatStepper } ]
})
export class MatStepperSelectedIndexTwoWayDirective implements OnInit {

// #region fields

    /** selectedIndex 双方向バインディング用 */
    @Input()
    get selectedIndexTwoWay() { return this._selectedIndexTwoWay; }
    set selectedIndexTwoWay(index: number) {
        this._selectedIndexTwoWay = index;
        if (this._stepper) {
            this._stepper.selectedIndex = index;
        }
    }

    /**  */
    @Output()
    selectedIndexTwoWayChange = new EventEmitter<number>();

    /** selectedIndex 双方向バインディング用 */
    private _selectedIndexTwoWay: number = -1;

    /** DestoryEmitter */
    private readonly onDestroy$ = new EventEmitter();

// #endregion

// #region init/destroy

    /**
     *
     * @param _stepper
     */
    constructor(public _stepper: MatStepper) {}

    /**
     * OnInit
     */
    ngOnInit(): void {
        if (this._stepper) {
            this._stepper.selectionChange
                .pipe(takeUntil(this.onDestroy$))
                .subscribe(event => {
                    this.selectedIndexTwoWayChange.emit(event.selectedIndex);
                });
        }
    }

    /**
     * OnDestroy
     */
    ngOnDestroy(): void {
        this.onDestroy$.emit();
    }

// #endregion

}
