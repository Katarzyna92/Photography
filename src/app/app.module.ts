import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportazComponent } from './reportaz/reportaz.component';
import { OfertaComponent } from './oferta/oferta.component';
import { CennikComponent } from './cennik/cennik.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { Reportaz1Component } from './reportaz1/reportaz1.component';
import { Reportaz2Component } from './reportaz2/reportaz2.component';
import { Reportaz3Component } from './reportaz3/reportaz3.component';
import { Reportaz4Component } from './reportaz4/reportaz4.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportazComponent,
    OfertaComponent,
    CennikComponent,
    KontaktComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    Reportaz1Component,
    Reportaz2Component,
    Reportaz3Component,
    Reportaz4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
