import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
    { path: '/appointment', title: 'Appointment', icon: 'lni lni-calendar icon-color-2', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/opd', title: 'OPD', icon: 'fadeIn animated bx bx-plus-medical icon-color-2', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/office-front', title: 'OfficeFront', icon: 'fadeIn animated bx bx-buildings icon-color-2', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/pharmacy', title: 'Pharmacy', icon: 'fadeIn animated bx bx-first-aid icon-color-2', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
];