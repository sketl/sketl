import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent, getPlugins } from './app.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';

export function appInit(router: Router) {
  return () =>
    new Promise((resolve, reject) => {
      getPlugins().subscribe(
        (plugins) => {
          const routes: Routes = plugins.map((plug) => {
            const route: Route = {
              path: plug.link,
              loadChildren: plug.modFactory,
            };
            return route;
          });
          router.resetConfig(routes);

          resolve(routes);
        },
        (err) => reject(err)
      );
    });
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: appInit,
      deps: [Router],
    },
  ],
})
export class AppModule {}
