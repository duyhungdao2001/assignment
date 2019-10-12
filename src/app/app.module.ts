import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { HoidapComponent } from './hoidap/hoidap.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    DangkyComponent,
    DangnhapComponent,
    LienheComponent,
    HoidapComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: TrangchuComponent},
      {path:'trangchu', component: TrangchuComponent},
      {path:'trangchu/:productld', component: TrangchuComponent},
      {path: 'dangnhap', component: DangnhapComponent},
      {path: 'lienhe', component: LienheComponent},
      {path: 'dangky', component: DangkyComponent},
      {path: 'hoidap', component: HoidapComponent},
      {path:'**', redirectTo:'trangchu', pathMatch:"full" },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
