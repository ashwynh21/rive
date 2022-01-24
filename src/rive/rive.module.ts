import routes from './rive.routes';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiveComponent } from './rive.component';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RIVE_FOLDER, RiveModule as Rive } from 'ng-rive';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [RiveComponent],
	imports: [
		CommonModule,
		MatDividerModule,
		MatRippleModule,
		MatIconModule,
		Rive,
		MatButtonModule,
		RouterModule.forChild(routes),
	],
	providers: [
		{
			provide: RIVE_FOLDER,
			useValue: 'assets/rive',
		},
	],
})
export class RiveModule {}
