import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RiveModule } from 'ng-rive';
import { NavigationComponent } from './navigation/navigation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
	declarations: [AppComponent, NavigationComponent, ToolbarComponent, ContentComponent],
	imports: [BrowserModule, BrowserAnimationsModule, RiveModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
