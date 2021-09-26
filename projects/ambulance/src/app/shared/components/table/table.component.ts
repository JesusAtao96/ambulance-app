import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../interfaces/metaColumn.interface';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() metaDataColumns: MetaDataColumn[] = [];
  listFields: string[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.listFields = this.metaDataColumns.map((x) => x.field);
  }
}
