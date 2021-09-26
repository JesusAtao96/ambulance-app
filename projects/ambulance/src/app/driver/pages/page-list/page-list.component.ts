import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metaColumn.interface';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  data: any[] = [
    { id: 1, name: 'John', license: '24561' },
    { id: 2, name: 'Jane', license: '24562' },
    { id: 3, name: 'Jack', license: '24563' },
  ];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Nombre de piloto' },
    { field: 'license', title: 'Licencia' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
