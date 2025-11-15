import { provideAuth } from './../projects/auth/src/lib/auth.providers';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

try {
    bootstrapApplication(App, {
    ...appConfig,
    providers: [
      provideRouter(routes),
      provideAuth
    ]
  });
} catch (err) {
  console.error(err);
}
