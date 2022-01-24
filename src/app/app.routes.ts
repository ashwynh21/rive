import { Route } from '@angular/router';

export default [
	{
		path: 'animations',
		loadChildren: () =>
			import(
				/* webpackChunkName: "rive" */
				'../rive/rive.module'
			).then(({ RiveModule }) => RiveModule),
	},
] as Array<Route>;
