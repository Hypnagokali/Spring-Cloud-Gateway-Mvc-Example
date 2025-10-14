import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./first-page/first-page.component').then(m => m.FirstPageComponent)
	},
	{
		path: 'second',
		loadComponent: () => import('./second-page/second-page.component').then(m => m.SecondPageComponent)
	}
];
