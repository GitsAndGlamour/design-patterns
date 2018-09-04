import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './header/nav/nav.component';
import { PageNotFoundComponent } from './page.not.found.component';
import { AppRoutingModule } from './app-routing.module';
import { PatternComponent } from './pattern/pattern.component';
import { AbstractFactoryComponent } from './pattern/creational/abstract-factory/abstract-factory.component';
import { CreationalComponent } from './pattern/creational/creational.component';
import { BehavioralComponent } from './pattern/behavioral/behavioral.component';
import { StructuralComponent } from './pattern/structural/structural.component';
import { ConcurrencyComponent } from './pattern/concurrency/concurrency.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ArticleComponent,
    FooterComponent,
    NavComponent,
    PatternComponent,
    PageNotFoundComponent,
    CreationalComponent,
    StructuralComponent,
    BehavioralComponent,
    ConcurrencyComponent,
    AbstractFactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
