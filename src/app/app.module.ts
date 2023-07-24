import { CommonUtil } from './base/util/common-util';
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { URLStringFormatter } from './base/util/url-string-formatter';
import { DiagnosticsService } from './diagnostics/diagnostics.service';
import { HsLocalStorage } from './base/hsLocalStorage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import "bootstrap/dist/js/bootstrap.min";
import { Config } from './base/config';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

import { APP_RESOLVER_PROVIDERS } from './app.resolver';

import { AppConfig } from './app.config';

import { WidgetModule } from './layout/widget/widget.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { PocPopupModule } from './pocpopup/pocpopup.module';

import { AppState, InternalStateType } from './app.service';
import { HttpService } from './base/http.service';

import { App } from './app.component';
import { ErrorComponent } from './error/error.component';
import { PharmacyService } from './pharmacy/pharmacy.service';
import { POCService } from "./poc/poc.service";

// FCM Notification Message Imports
import { AngularFireModule } from "angularfire2";
import * as firebase from "firebase";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { ToasterModule } from './layout/toaster/toaster.module';
import { ToasterService } from './layout/toaster/toaster.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FileUtil } from './base/util/file-util';

const firebaseConfigInitData = Config && Config.portal && Config.portal.firebaseConfig ? Config.portal.firebaseConfig : null;
if (firebaseConfigInitData)
  firebase.initializeApp(firebaseConfigInitData);

// import { NewsModule } from './news/news.module';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  AppConfig
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    ErrorComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    WidgetModule,
    ToasterModule,
    AuthModule,
    LoginModule,
    PocPopupModule,
    FullCalendarModule,
    //Notifiaction Message Imports
    AngularFireModule.initializeApp(firebaseConfigInitData),
    AngularFireDatabaseModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    HttpService,
    ToasterService,
    URLStringFormatter,
    PharmacyService,
    DiagnosticsService,
    POCService,
    HsLocalStorage,
    CommonUtil,
    FileUtil
  ],
  exports: [
    WidgetModule,
    AuthModule
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) { }

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    /**
     * Set state
     */
    this.appState._state = store.state;
    /**
     * Set input values
     */
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    /**
     * Save state
     */
    const state = this.appState._state;
    store.state = state;
    /**
     * Recreate root elements
     */
    store.disposeOldHosts = createNewHosts(cmpLocation);
    /**
     * Save input values
     */
    store.restoreInputValues = createInputTransfer();
    /**
     * Remove styles
     */
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    /**
     * Display new elements
     */
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
