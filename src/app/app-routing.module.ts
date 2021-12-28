import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SettingsPageComponent } from './pages/settings-page/settings-page.component'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'settings',
    component: SettingsPageComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
