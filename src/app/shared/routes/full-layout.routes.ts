import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'appointment',
        loadChildren: () => import('../../appointment/appointment.module').then(m => m.AppointmentModule)
    },
    {
        path: 'opd',
        loadChildren: () => import('../../opd/opd.module').then(m => m.AppointmentModule)
    },
    {
        path: 'office-front',
        loadChildren: () => import('../../office-front/office-front.module').then(m => m.OfficeFrontModule)
    },
    {
        path: 'pharmacy',
        loadChildren: () => import('../../pharmacy/pharmacy.module').then(m => m.PharmacyModule)
    },
];