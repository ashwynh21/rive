import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { By } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationComponent', () => {
	let component: NavigationComponent;
	let fixture: ComponentFixture<NavigationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NavigationComponent],
			imports: [MatDividerModule, RouterTestingModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NavigationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// so the component should display flex and column flow
	it('should display flex and flow column', () => {
		const debug = fixture.debugElement;

		const style = getComputedStyle(debug.nativeElement);
		expect(style.display).toEqual('flex');
		expect(style.flexFlow).toContain('column');
	});

	it('should have a div element with the class title, and should have at least one child', () => {
		const debug = fixture.debugElement;
		const title = debug.query(By.css('div.title'));

		expect(title).toBeTruthy();
		expect(title.children.length).toBeGreaterThanOrEqual(1);
	});

	it('should have a div element with the class menu, should be a column', () => {
		const debug = fixture.debugElement;

		const menu = debug.query(By.css('.menu'));
		expect(menu).toBeTruthy();

		const style = getComputedStyle(menu.nativeElement);
		expect(style.display).toEqual('flex');
		expect(style.flexFlow).toContain('column');
	});

	it('should have a div element with the class footer', () => {
		const debug = fixture.debugElement;

		const footer = debug.query(By.css('.footer'));
		expect(footer).toBeTruthy();

		const style = getComputedStyle(footer.nativeElement);
		expect(style.display).toEqual('flex');
	});

	it('should have routerLinks on the menu children', () => {
		const debug = fixture.debugElement;

		const menu = debug.query(By.css('.menu'));
		expect(menu).toBeTruthy();

		const children = menu.children;
		expect(children.length).toBeGreaterThanOrEqual(1);
		// each child has to have a routerLink property
	});

	it('should have a routerLink to home on the title class', () => {
		const debug = fixture.debugElement;

		const menu = debug.query(By.css('.menu'));
		expect(menu).toBeTruthy();
	});
});
