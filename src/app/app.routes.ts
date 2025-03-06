import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { VehicleComponent } from './Pages/vehicle/vehicle.component';
import { PricingComponent } from './Pages/pricing/pricing.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'vehicle',
                component: VehicleComponent
            },
            {
                path: 'pricing',
                component: PricingComponent
            },
            {
                path: 'aboutus',
                component: AboutUsComponent
            }
        ]
    }
];
