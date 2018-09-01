import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './header/nav/nav.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { MessageModule } from './messages/message.module';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import {WelcomeComponent} from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ArticleComponent,
    FooterComponent,
    NavComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    MessageModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [AuthService,
    Router
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
