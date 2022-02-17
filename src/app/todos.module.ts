import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TranslocoModule, TRANSLOCO_SCOPE } from "@ngneat/transloco";
import { MyComponent } from "./todos/todos.component";

const routes: Routes = [
  {
    path: '',
    component: MyComponent
  }
];

@NgModule({
  declarations: [MyComponent],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'todos' }],
  imports: [RouterModule.forChild(routes), TranslocoModule]
})
export class TodosModule {}
