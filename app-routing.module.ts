import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakeComponent } from './fake/fake.component';

const routes: Routes = [
  {
    path:'fake', component:FakeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
