import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

// Modules
import { SharedModules } from '../shared/shared.modules';

@NgModule({
    declarations: [
     DashboardComponent,
     ProgressComponent,
     Graficas1Component,
     PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports: [
        SharedModules
    ]
})
export class PagesModule { }
