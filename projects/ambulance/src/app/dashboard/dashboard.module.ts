import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PageReportsComponent } from './pages/page-reports/page-reports.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [PageReportsComponent],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
