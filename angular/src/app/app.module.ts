import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './users/auth/auth-guard.service';
import { AuthService } from './users/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function() {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    })
  ],
  providers:[AuthService, AuthGuardService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
