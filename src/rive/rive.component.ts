import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-rive',
	templateUrl: './rive.component.html',
	styleUrls: ['./rive.component.scss'],
})
export class RiveComponent implements OnInit {
	selected = 3;
	animations = [
		{
			icon: 'people',
			name: 'Gang',
			url: 'gang',
		},
		{
			icon: 'sailing',
			name: 'Mr. Crab',
			url: 'crab',
		},
		{
			icon: 'emoji_emotions',
			name: 'Emojis',
			url: 'emoji',
		},
		{
			icon: 'paragliding',
			name: 'Sky Diver',
			url: 'diver',
		},
	];

	constructor(private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {}

	onselect(index: number) {
		this.selected = index;

		this.cdr.detectChanges();
	}
}
