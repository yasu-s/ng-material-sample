import { Directive, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator, MatTableDataSource } from '@angular/material';


/**
 * MatPaginator extension Directive
 */
@Directive({
    selector: 'mat-paginator[dataSource]',
    providers: [ MatPaginator ]
})
export class MatPaginatorDataSource {

// #region fields

    _dataSource: MatTableDataSource<any>;

    /**  */
    @Input()
    get dataSource(): MatTableDataSource<any> { return this._dataSource; }
    set dataSource(value: MatTableDataSource<any>) {
        this._dataSource = value;
        if (this._paginator)
            this.dataSource.paginator = this._paginator;
    }

// #endregion

// #region init/destroy

    /**
     *
     * @param _paginator
     */
    constructor(public _paginator: MatPaginator) {}

// #endregion

// #region methods


// #endregion

}
