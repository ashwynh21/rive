import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { NavigationComponent } from './navigation/navigation.component';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppComponent, ToolbarComponent, ContentComponent, NavigationComponent],
		}).compileComponents();
	});

	beforeEach(async () => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create the app component', () => {
		expect(component).toBeTruthy();
	});

	// it should have a navigation pane on the left and a toolbar to the top
	it('should have a navigation component', () => {
		// we define the navigation expectation
		const debug = fixture.debugElement;
		expect(debug.queryAll(By.directive(NavigationComponent))).toBeTruthy();
	});

	// it should have a toolbar component
	it('should have a toolbar component', () => {
		const debug = fixture.debugElement;
		expect(debug.queryAll(By.directive(ToolbarComponent))).toBeTruthy();
	});

	// it should have a content component
	it('should have a content component', () => {
		const debug = fixture.debugElement;

		expect(debug.queryAll(By.directive(ContentComponent))).toBeTruthy();
	});

	it('should display flex to layout the navigation and content', () => {
		const debug = fixture.debugElement;

		expect(getComputedStyle(debug.nativeElement).display).toEqual('flex');
	});

	it('should have a column div element containing the toolbar and content', () => {
		const debug = fixture.debugElement;

		const div = debug.query(By.css('div'));
		expect(div).toBeTruthy();

		const [toolbar, content] = div.children;
		expect(toolbar).toBeTruthy();
		expect(content).toBeTruthy();

		expect(toolbar.name).toEqual('app-toolbar');
		expect(content.name).toEqual('app-content');

		// final test is to check if the div container is display flex on column
		const style = getComputedStyle(div.nativeElement);
		expect(style.display).toEqual('flex');
		expect(style.flexFlow).toContain('column');
	});
});
