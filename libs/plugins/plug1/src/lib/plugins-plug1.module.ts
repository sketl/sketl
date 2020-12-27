import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './cmp-a';
import { BComponent } from './cmp-b';
import { RouterModule } from '@angular/router';
import { PluginsPlug1RoutingModule } from './plugins-plug1-routing.module';

@NgModule({
  imports: [CommonModule, RouterModule, PluginsPlug1RoutingModule],
  declarations: [AComponent, BComponent],
})
export class PluginsPlug1Module {}
