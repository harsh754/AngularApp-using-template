import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';
import { HomeComponent } from './index/home/home.component';
import { BlogComponent } from './index/blog/blog.component';
import { ContactComponent } from './index/contact/contact.component';
import { AheaderComponent } from './dash/aheader/aheader.component';
import { AfooterComponent } from './dash/afooter/afooter.component';
import { SidebarComponent } from './dash/sidebar/sidebar.component';
import { DefaultComponent } from './dash/default/default.component';
import { AcontactComponent } from './dash/acontact/acontact.component';
import { RouterModule, Routes} from '@angular/router';


const routes:Routes=[
  { path:'', component:IndexComponent,
  children:[
    { path:'', redirectTo:'home', pathMatch:'full'},
    { path:'home', component:HomeComponent},
    { path:'blog', component:BlogComponent},
    { path:'contact', component:ContactComponent}
  ]},
  { path:'login', component:LoginComponent},
  { path:'admin', component:DashComponent,
   children:[
     { path:'', redirectTo:'default', pathMatch:'full'},
     { path:'default', component:DefaultComponent}
   ]}
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    AheaderComponent,
    AfooterComponent,
    SidebarComponent,
    DefaultComponent,
    AcontactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
