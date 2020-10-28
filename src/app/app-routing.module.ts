import { Reportaz2Component } from './reportaz2/reportaz2.component';
import { Reportaz1Component } from './reportaz1/reportaz1.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { CennikComponent } from './cennik/cennik.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ReportazComponent } from './reportaz/reportaz.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reportaz3Component } from './reportaz3/reportaz3.component';
import { Reportaz4Component } from './reportaz4/reportaz4.component';

const routes: Routes = [
  {path: '', redirectTo: '/portfolio', pathMatch: 'full'},
  {path: 'portfolio', component: PortfolioComponent },
  {path: 'reportaz', component: ReportazComponent},
  {path: 'oferta', component: OfertaComponent},
  {path: 'cennik', component: CennikComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'reportaz1', component: Reportaz1Component},
  {path: 'reportaz2', component: Reportaz2Component},
  {path: 'reportaz3', component: Reportaz3Component},
  {path: 'reportaz4', component: Reportaz4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
