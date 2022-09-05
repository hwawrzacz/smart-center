import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SettingsPageComponent } from './pages/settings/settings-page/settings-page.component'

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: 'settings',
    component: SettingsPageComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
