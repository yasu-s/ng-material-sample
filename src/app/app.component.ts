import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

// #region fields

    /** タイトル */
    title = 'app';

    /** */
    stepperIndex = 0;

// #endregion

// #region methods

    /**
     * クリックイベント
     */
    onClick(): void {
        alert('hoge');
    }

    /**
     * 最初のステッパーに移動
     */
    moveInitStepper(): void {
        this.stepperIndex = 0;
    }

// #endregion

}
