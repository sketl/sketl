import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export function getPlugins() {
  return of([
    {
      name: 'Plug-1',
      link: 'plug1',
      modFactory: () =>
        import('@sketl/plugins/plug1').then((m) => m.PluginsPlug1Module),
    }
  ]);
}

@Component({
  selector: 'sketl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(readonly router: Router) {}

  title = 'happ';

  plugins$ = getPlugins();

  ngOnInit() {
    
  }
}
