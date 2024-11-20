import {Routes} from '@angular/router';
import {ExampleComponent} from './example.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'some',
  },
  {
    path: ':param',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'thing',
      },
      {
        path: 'thing',
        component: ExampleComponent,
      }
    ]
  }
];
