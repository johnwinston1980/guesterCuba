import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';


import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';

import { ReactiveFormsModule } from '@angular/forms';


import { FormsModule } from '@angular/forms';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { MainProviderComponent } from './providers/main-provider/main-provider.component';
import { MainDispatcherComponent } from './dispatchers/main-dispatcher/main-dispatcher.component';
import { MainSenderComponent } from './sender/main-sender/main-sender.component';
import { MessageDialogComponent } from './z_utils/components/message-dialog/message-dialog.component';
import { NavbarComponent } from './z_utils/components/navbar/navbar.component';
import { AddDispatcherComponent } from './providers/add-dispatcher/add-dispatcher.component';
import { MainComponent } from './z_utils/components/main/main.component';
import { ListDispatchersComponent } from './dispatchers/list-dispatchers/list-dispatchers.component';
import { AddTransferComponent } from './transfers/add-transfer/add-transfer.component';
import { ListContactsComponent } from './sender/list-contacts/list-contacts.component';
import { AddContactComponent } from './sender/add-contact/add-contact.component';


@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    RegisterComponent,
    MainProviderComponent,
    MainDispatcherComponent,
    MainSenderComponent,
    MessageDialogComponent,
    NavbarComponent,
    AddDispatcherComponent,
    MainComponent,
    ListDispatchersComponent,
    AddTransferComponent,
    ListContactsComponent,
    AddContactComponent,    
  ],
  imports: [
    FormsModule,
    AngularFireAuthModule,
    MaterialModule,    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule    
  ],
  entryComponents: [ MessageDialogComponent ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }