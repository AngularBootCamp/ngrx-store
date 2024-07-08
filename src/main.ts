// https://github.com/stackblitz/core/issues/2366
import 'zone.js'; // Avoid error in StackBlitz for Angular polyfill

import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { AppComponent } from './app/app.component';
import { reducers } from './app/state';

bootstrapApplication(AppComponent, {
  providers: [provideStore(reducers)]
}).catch(err => console.error(err));
