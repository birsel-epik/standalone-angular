import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter} from "@angular/router";
import {appRoutes} from "./app/appRoutes";
import {API_URL} from "./app/injection-tokens";
import {environment} from "./environments/environment";


// @ts-ignore
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    { provide: API_URL, useValue: environment.apiUrl ?? "" },
  ]
})

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
