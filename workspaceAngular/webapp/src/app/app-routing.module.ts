import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  {
    path: 'productos',
    component: NavigationComponent,
  },
  {
    path: 'compras',
    component: SidenavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
