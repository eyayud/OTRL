import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../@custor/modules/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppTranslationService, TranslateLanguageLoader } from '../../../@custor/services/translation.service';
import {  ManagerComponent} from './manager/manager.component';
import {  ManagerListComponent} from './manager-list/manager-list.component';
// import {BusinessComponent} from './business/business.component';
// import {BusinessListComponent} from './business-list/Business-list.component';
import { LookUpService } from '../../common/services/look-up.service';
import { AddressService } from '../../common/services/address.service';
import { ManagerService } from './services/manager.service';

import { AngConfirmDialogModule } from '../../../@custor/components/confirm-dialog/confirm-dialog.module';
import { BreadcrumbComponent } from '../../../@custor/components/breadcrumb/breadcrumb.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceRegisterComponent } from './trade/service-register/service-register.component';
import { RegistrationTabComponent } from './trade/registration-tab/registration-tab.component';
import { RegistrationDocumentComponent } from './trade/registration-document/registration-document.component';
import { PaymentComponent } from './trade/payment/payment.component';
import { GeneralComponent } from './trade/general/general.component';
export const routes = [
    { path: '', redirectTo: 'manager-list', pathMatch: 'full'},
    { path: 'manager-list', component: ManagerListComponent},
    { path: 'manager/:id', component: ManagerComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'service-register', component: ServiceRegisterComponent},
    { path: 'registration-tab', component: RegistrationTabComponent},
  ];
@NgModule({
    declarations: [
        ManagerComponent,
        ManagerListComponent,
        BreadcrumbComponent,
        ProfileComponent,
        ServiceRegisterComponent,
        RegistrationTabComponent,
        RegistrationDocumentComponent,
        PaymentComponent,
        GeneralComponent,
        // BusinessComponent,
        // BusinessListComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateLanguageLoader
          }
        }),
        AngConfirmDialogModule
      ],
     providers: [AppTranslationService,
                 LookUpService, 
                 AddressService,
                 ManagerService,
                 ]

  })
  export class CustomerModule { }
