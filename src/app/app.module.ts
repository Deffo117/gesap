import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';

import {
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG,
    PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';

import { DragulaService } from 'ng2-dragula';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { AddBatComponent } from './batiments/add-bat/add-bat.component';
import { ListesBatComponent } from './batiments/listes-bat/listes-bat.component';
import { ModifyBatComponent } from './batiments/modify-bat/modify-bat.component';
import { ListeApptComponent } from './appartement/liste-appt/liste-appt.component';
import { ModifyApptComponent } from './appartement/modify-appt/modify-appt.component';
import { AddApptComponent } from './appartement/add-appt/add-appt.component';
import { AddChargComponent } from './charge/add-charg/add-charg.component';
import { ModifyChargComponent } from './charge/modify-charg/modify-charg.component';
import { ListChargComponent } from './charge/list-charg/list-charg.component';
import { AddFacteauComponent } from './facture_eau/add-facteau/add-facteau.component';
import { ListFacteauComponent } from './facture_eau/list-facteau/list-facteau.component';
import { ModifyFacteauComponent } from './facture_eau/modify-facteau/modify-facteau.component';
import { ModifyFactelectComponent } from './facture_electricite/modify-factelect/modify-factelect.component';
import { AddFactelectComponent } from './facture_electricite/add-factelect/add-factelect.component';
import { ListFactelectComponent } from './facture_electricite/list-factelect/list-factelect.component';
import { ListLocComponent } from './locataire/list-loc/list-loc.component';
import { AddLocComponent } from './locataire/add-loc/add-loc.component';
import { ModifyLocComponent } from './locataire/modify-loc/modify-loc.component';
import { ModifyContbailComponent } from './cont_bail/modify-contbail/modify-contbail.component';
import { AddContbailComponent } from './cont_bail/add-contbail/add-contbail.component';
import { ListContbailComponent } from './cont_bail/list-contbail/list-contbail.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
//import { LoginPageComponent } from "C:/Users/PC/gesap/src/app/pages/content-pages/login/login-page.component";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    // tslint:disable-next-line:max-line-length
    declarations: [AppComponent,
                   //LoginPageComponent,
                   FullLayoutComponent,
                   ContentLayoutComponent, 
                   AddBatComponent, 
                   ListesBatComponent, 
                   ModifyBatComponent, 
                   ListeApptComponent, 
                   ModifyApptComponent, 
                   AddApptComponent, 
                   AddChargComponent, 
                   ModifyChargComponent, 
                   ListChargComponent, 
                   AddFacteauComponent, 
                   ListFacteauComponent, 
                   ModifyFacteauComponent, 
                   ModifyFactelectComponent, 
                   AddFactelectComponent, 
                   ListFactelectComponent, 
                   ListLocComponent, 
                   AddLocComponent, 
                   ModifyLocComponent, 
                   ModifyContbailComponent, 
                   AddContbailComponent, 
                   ListContbailComponent],
    imports: [
        StorageServiceModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(),
        NgbModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AgmCoreModule.forRoot({
            apiKey: 'YOUR KEY'
        }),
        PerfectScrollbarModule
    ],
    providers: [
        AuthService,
        AuthGuard,
        DragulaService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
