import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AComponent } from './cmp-a';
import { BComponent } from './cmp-b';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'a',
        component: AComponent,
      },
      {
        path: 'b',
        component: BComponent,
      },
      {
          path: '',
          redirectTo: 'a',
      }
    ]),
  ],
})
export class PluginsPlug1RoutingModule {}
