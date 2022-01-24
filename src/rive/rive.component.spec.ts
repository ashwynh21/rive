import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiveComponent } from './rive.component';
import { MatDividerModule } from '@angular/material/divider';

describe('RiveComponent', () => {
	let component: RiveComponent;
	let fixture: ComponentFixture<RiveComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RiveComponent],
			imports: [MatDividerModule],
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

	// we want the rive module to contain a single component, this component, so that we can split the view of the
	// component into a list of animations that the user can view, accompanied by a canvas to the right of the screen
	it('should display flex', () => {
		const debug = fixture.debugElement;

		const styles = getComputedStyle(debug.nativeElement);

		expect(styles.display).toEqual('flex');
	});

	it('shoud have two div child elements both with a flex value containing 1', () => {
		const debug = fixture.debugElement;

		const [list, canvas] = debug.children;
		expect(list).toBeTruthy();
		expect(canvas).toBeTruthy();

		expect(getComputedStyle(list.nativeElement).flex).toContain('1');
		expect(getComputedStyle(canvas.nativeElement).flex).toContain('1');
	});

	it('should have a property called animations and should be a list with at least one animation', () => {
		expect(component['animations']).toBeTruthy();
	});

	it('should keep a reference to the selected item as selected', () => {
		expect(component['selected']).toBeTruthy();
	});

	it('should have a function to call when an item is selected', () => {
		expect(component['onselect']).toBeTruthy();
	});
});
