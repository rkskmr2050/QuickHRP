import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
import { CONTENT_ROUTES } from './shared/routes/content-layout.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'appointment',
    redirectTo: 'appointment',
    pathMatch: 'full',
  },
  {
    path: 'office-front',
    redirectTo: 'office-front',
    pathMatch: 'full',
  },
  {
    path: 'pharmacy',
    redirectTo: 'pharmacy',
    pathMatch: 'full',
  },
  { path: '', component: FullLayoutComponent, data: { title: 'Dashboard' }, children: Full_ROUTES },
  { path: '', component: ContentLayoutComponent, data: { title: '' }, children: CONTENT_ROUTES },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
