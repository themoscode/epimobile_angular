import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { loginComponent, modalLagerMandantComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { InvoiceDetailsComponent } from './invoices/invoice-details/invoice-details.component';
import { InvoicesListComponent } from './invoices/invoices-list/invoices-list.component';
import { MeetingDetailsComponent } from './meetings/meeting-details/meeting-details.component';
import { MeetingsListComponent } from './meetings/meetings-list/meetings-list.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { PanelHeaderComponent } from './Shared/panel-header/panel-header.component';

import { UiSwitchModule } from 'angular2-ui-switch';
import { HttpClientModule } from '@angular/common/http';
import { Services } from './services';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CommunicationDataComponent } from './Shared/communication-data/communication-data.component';
import { CommunicationDataCpComponent } from './Shared/communication-data/communication-data-cp.component';

import { ModalContactPersonComponent } from './contacts/contact-details/modal-contact-person/modal-contact-person.component';
import { ModalHistoryComponent } from './contacts/contact-details/modal-history/modal-history.component';
import { ModalSelectDatesComponent } from './Shared/modal-select-dates/modal-select-dates.component';

registerLocaleData(localeDe);

const appRoutes:Routes = [
  { 
    path:'',
    component:loginComponent 
  },
  { 
    path:'home',
   // //canActivate:[AuthGuard],
    component:HomeComponent 
  },
  { 
    path:'contacts',
  //  //canActivate:[AuthGuard],
    component:ContactsListComponent 
  },
  { 
    path:'contact/:id',
   // //canActivate:[AuthGuard],
    component:ContactDetailsComponent 
  },
  { 
    path:'meetings',
   // //canActivate:[AuthGuard],
    component:MeetingsListComponent 
  },
  { 
    path:'meeting/:id',
   // //canActivate:[AuthGuard],
    component:MeetingDetailsComponent 
  },
  { 
    path:'orders',
   // //canActivate:[AuthGuard],
    component:OrdersListComponent 
  },
  { 
    path:'order/:id',
   // //canActivate:[AuthGuard],
    component:OrderDetailsComponent 
  },
  { 
    path:'products',
    // //canActivate:[AuthGuard],
    component:ProductsListComponent 
  },
  { 
    path:'product/:id',
    // //canActivate:[AuthGuard],
    component:ProductDetailsComponent 
  },
  { 
    path:'tasks',
    // //canActivate:[AuthGuard],
    component:TasksListComponent 
  },
  { 
    path:'task/:id',
    // //canActivate:[AuthGuard],
    component:TaskDetailsComponent 
  },
  { 
    path:'invoices',
    ////canActivate:[AuthGuard],
    component:InvoicesListComponent 
  },
  { 
    path:'invoice/:id',
    ////canActivate:[AuthGuard],
    component:InvoiceDetailsComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    loginComponent, 
    modalLagerMandantComponent,
    HomeComponent,
    TimeTrackingComponent,
    ContactDetailsComponent,
    ContactsListComponent,
    InvoiceDetailsComponent,
    InvoicesListComponent,
    MeetingDetailsComponent,
    MeetingsListComponent,
    OrdersListComponent,
    OrderDetailsComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    TasksListComponent,
    TaskDetailsComponent,
    PanelHeaderComponent,
    CommunicationDataComponent,
    CommunicationDataCpComponent,
    ModalContactPersonComponent,
    ModalHistoryComponent,
    ModalSelectDatesComponent
    
    
     
  ],
  entryComponents: [
    modalLagerMandantComponent,
    ModalContactPersonComponent,
    ModalHistoryComponent,
    ModalSelectDatesComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    UiSwitchModule,
    HttpClientModule,
    NgxPaginationModule,
    OrderModule,
    FilterPipeModule
  ],
  providers: [UserService,AuthGuard,Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
