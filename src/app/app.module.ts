import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RiveModule } from 'ng-rive';
import { NavigationComponent } from './navigation/navigation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [AppComponent, NavigationComponent, ToolbarComponent, ContentComponent],
	imports: [BrowserModule, BrowserAnimationsModule, RiveModule, MatDividerModule, RouterModule.forRoot([])],
	bootstrap: [AppComponent],
})
export class AppModule {}
