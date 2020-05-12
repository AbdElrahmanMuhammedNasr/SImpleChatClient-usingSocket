import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RealChatComponent } from './real-chat/real-chat.component';
import { FriendsComponent } from './friends/friends.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'chat', component: MainComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RealChatComponent,
    FriendsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
