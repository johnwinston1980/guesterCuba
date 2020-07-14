import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/users/login/login.component'
import { RegisterComponent } from '../app/users/register/register.component'

import { MainComponent } from '../app/z_utils/components/main/main.component'
import { MainSenderComponent } from '../app/sender/main-sender/main-sender.component'
import { MainProviderComponent } from '../app/providers/main-provider/main-provider.component'
import { MainDispatcherComponent } from '../app/dispatchers/main-dispatcher/main-dispatcher.component'


import { AddDispatcherComponent } from '../app/providers/add-dispatcher/add-dispatcher.component'
import { AddTransferComponent } from '../app/transfers/add-transfer/add-transfer.component'
import { AddContactComponent } from '../app/sender/add-contact/add-contact.component'

import { ListDispatchersComponent } from '../app/dispatchers/list-dispatchers/list-dispatchers.component'
import { ListContactsComponent } from '../app/sender/list-contacts/list-contacts.component'


const routes: Routes = [
 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: 'main', component: MainComponent },
  { path: 'main-sender', component: MainSenderComponent },
  { path: 'main-provider', component: MainProviderComponent },
  { path: 'main-dispatcher', component: MainDispatcherComponent },

  { path: 'add-dispatcher', component: AddDispatcherComponent },
  { path: 'add-transfer', component: AddTransferComponent },
  { path: 'add-contact', component: AddContactComponent },

  { path: 'list-dispatchers', component: ListDispatchersComponent },
  { path: 'list-contacts', component: ListContactsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }