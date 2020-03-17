import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VisitorsComponent } from 'app/pages/dashboard/visitors/visitors.component';
import { TeamoverallComponent } from 'app/pages/dashboard/teamoverall/teamoverall.component';
import { PostperformanceComponent } from 'app/pages/dashboard/postperformance/postperformance.component';
import { CalendarComponent } from 'app/pages/calendar/calendar.component';
import { InboxComponent } from 'app/pages/inbox/inbox.component';
import { InvoicingComponent } from 'app/pages/invoicing/invoicing.component';
import { LabComponent } from 'app/pages/lab/lab.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    VisitorsComponent,
    TeamoverallComponent,
    PostperformanceComponent,
    CalendarComponent,
    InboxComponent,
    InvoicingComponent,
    LabComponent,
  ]
})

export class AdminLayoutModule {}
