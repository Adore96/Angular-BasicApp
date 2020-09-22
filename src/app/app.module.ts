import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ContactFormService} from './contact-form/contact-form.service';
import {RouterModule} from '@angular/router';
import { SecondComponent } from './second/second.component';
import {SecondService} from './second.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ContactFormComponent
      },
      {
        path: 'second',
        component: SecondComponent
      },

      // {
      //   path: 'second/:username',
      //   component: Componenttobeloaded
      // }

    ]),
  ],
  providers: [
    ContactFormService,
    SecondService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
