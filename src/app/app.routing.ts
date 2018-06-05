import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
// import {AuthGuard} from './services/common_services/auth-guard.service';
import {LoanApplicationNew} from './components/los_application/newloanapplication.component';

const appRoutes: Routes = [
    // {
    //     path: 'home',
    //     component: HomeComponent,
    //     canActivate: [AuthGuard]
    // },
    {
        path: '',
        component: LoanApplicationNew
    },
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);