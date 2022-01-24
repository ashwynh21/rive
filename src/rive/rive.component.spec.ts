import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiveComponent } from './rive.component';

describe('RiveComponent', () => {
	let component: RiveComponent;
	let fixture: ComponentFixture<RiveComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RiveComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RiveComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
