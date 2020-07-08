import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveDrivenFormComponent } from './components/reactive-driven-form/reactive-driven-form.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full'
  },
  {
    path: 'basic',
    component: BasicFormComponent
  },
  {
    path: 'template-driven',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'reactive-driven',
    component: ReactiveDrivenFormComponent
  },
  {
    path: 'dynamic-form',
    component: DynamicFormsComponent
  },
  {
    path: 'result',
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
