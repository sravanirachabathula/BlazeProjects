import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseEntryComponentComponent } from './expense-entry-component/expense-entry-component.component';
import { ExpenseEntryListComponentComponent } from './expense-entry-list-component/expense-entry-list-component.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { ExpenseGuard } from './expense.guard';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent },
   { path: 'expenses', component: ExpenseEntryComponentComponent, canActivate: [ExpenseGuard]},
   { path: 'expenses/detail/:id', component: ExpenseEntryListComponentComponent, canActivate: [ExpenseGuard]},
   { path: '', redirectTo: 'expenses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }