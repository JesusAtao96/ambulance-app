import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { MedicRoutingModule } from './medic-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';

@NgModule({
  declarations: [PageListComponent],
  imports: [CommonModule, MedicRoutingModule, SharedModule],
})
export class MedicModule {}
