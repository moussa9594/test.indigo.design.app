import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxInputGroupModule, IgxSelectModule, IgxListModule, IgxCardModule, IgxNavbarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInfoComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxInputGroupModule,
    IgxSelectModule,
    FormsModule,
    IgxListModule,
    IgxCardModule,
    IgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
