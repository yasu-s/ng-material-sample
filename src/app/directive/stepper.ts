import { Directive, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { MatStepper } from '@angular/material';

/**
 * MatStepperNext extension Directive
 */
@Directive({
    selector: 'button[matStepperNextIf]',
    providers: [ MatStepper ]
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
    providers: [ MatStepper ]
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
