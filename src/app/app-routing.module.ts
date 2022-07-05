import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReferencesComponent } from './references/references.component';
import { TestCompComponent } from './test-comp/test-comp.component';

const routes: Routes = [
  { path: 'references', component: ReferencesComponent },
  { path: '', redirectTo: 'references', pathMatch: 'full' },
  { path: 'nominee', component: TestCompComponent },
  { path: 'nominee', redirectTo: 'nominee', pathMatch: 'full' },
  { path: 'home', component: TestCompComponent },
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
