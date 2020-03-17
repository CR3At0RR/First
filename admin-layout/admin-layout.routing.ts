import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { VisitorsComponent } from 'app/pages/dashboard/visitors/visitors.component';
import { PostperformanceComponent } from 'app/pages/dashboard/postperformance/postperformance.component';
import { TeamoverallComponent } from 'app/pages/dashboard/teamoverall/teamoverall.component';
import { CalendarComponent } from 'app/pages/calendar/calendar.component';
import { InboxComponent } from 'app/pages/inbox/inbox.component';
import { InvoicingComponent } from 'app/pages/invoicing/invoicing.component';
import { LabComponent } from 'app/pages/lab/lab.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'visitors',       component: VisitorsComponent },
    { path: 'postperformance',component: PostperformanceComponent },
    { path: 'teamoverall',component: TeamoverallComponent },
    { path: 'calendar',       component: CalendarComponent },
    { path: 'inbox',          component: InboxComponent },
    { path: 'invoicing',      component: InvoicingComponent },
    { path: 'lab',            component: LabComponent },
    
];
