
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterAdminComponent } from './BackOffice/footer-admin/footer-admin.component';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { SideBarComponent } from './BackOffice/side-bar/side-bar.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { HeaderUserComponent } from './FrontOffice/header-user/header-user.component';
import { FooterUserComponent } from './FrontOffice/footer-user/footer-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { NavBarAdminComponent } from './BackOffice/nav-bar-admin/nav-bar-admin.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { httpInterceptorProviders } from './FrontOffice/_helpers/http.interceptor';
import { BoardAdminComponent } from './BackOffice/board-admin/board-admin.component';
import { BoardUserComponent } from './FrontOffice/board-user/board-user.component';
import { BoardWorkerComponent } from './FrontOffice/board-worker/board-worker.component';
import { ForgetPasswordComponent } from './FrontOffice/forget-password/forget-password.component';
import { UserCreateComponent } from './BackOffice/userCrud/user-create/user-create.component';
import { UserDisplayComponent } from './BackOffice/userCrud/user-display/user-display.component';
import { UserUpdateComponent } from './BackOffice/userCrud/user-update/user-update.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NotFoundComponentComponent } from './FrontOffice/not-found-component/not-found-component.component';
import { ReservationComponent } from './FrontOffice/reservation/reservation.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileListComponentComponent } from './profile-list-component/profile-list-component.component';
import { ProfileFrontComponent } from './profile-front/profile-front.component';
import { FeedbackBackComponent } from './feedback-back/feedback-back.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { Validators, FormGroup } from '@angular/forms';
import { AllnotComponent } from './BackOffice/allnot/allnot.component';
import { AllresComponent } from './BackOffice/allres/allres.component';
import { EventListComponent } from './FrontOffice/event-list/event-list.component';
import { EvenementBackendComponent } from './FrontOffice/evenement-backend/evenement-backend.component';
import { FormationBackComponent } from './FrontOffice/formation-back/formation-back.component';
import { FormationListComponent } from './FrontOffice/formation-list/formation-list.component';
import { FormationComponent } from './FrontOffice/formation/formation.component';
import { EvenementComponent } from './FrontOffice/evenement/evenement.component';
import { Observable } from 'rxjs';
import { MyprofileComponent } from './myprofile/myprofile.component';


import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { FooterAdminComponent } from './BackOffice/footer-admin/footer-admin.component';
import { ListOrderComponent } from './BackOffice/list-order/list-order.component';
import { NavBarAdminComponent } from './BackOffice/nav-bar-admin/nav-bar-admin.component';
import { SideBarComponent } from './BackOffice/side-bar/side-bar.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { FooterUserComponent } from './FrontOffice/footer-user/footer-user.component';
import { HeaderUserComponent } from './FrontOffice/header-user/header-user.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { OrdersComponent } from './BackOffice/components/order.component';
import { OrderService } from './FrontOffice/Service/order.service';
import { ProductViewDtoComponent } from './product-view-dto/product-view-dto.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Order1Component } from './FrontOffice/Components1/order/orders.component1';
import { AppComponent } from './app.component';
import { loadStripe } from '@stripe/stripe-js';

import { MatMenuModule } from '@angular/material/menu';
import { NotFoundComponentComponent } from './FrontOffice/not-found-component/not-found-component.component';
import { WelcomePageComponent } from './FrontOffice/welcome-page/welcome-page.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterAdminComponent,
    AllTemplateAdminComponent,
    SideBarComponent,
    BodyAdminComponent,
    HeaderUserComponent,
    FooterUserComponent,
    BodyUserComponent,
    AllTemplateUserComponent,
    HomeComponent,
    NavBarAdminComponent,
    SideBarComponent,
    AllTemplateAdminComponent,
    NavBarAdminComponent,
    SideBarComponent,
    BodyAdminComponent,
    FooterAdminComponent,

    LoginComponent,
    RegisterComponent,
    BoardAdminComponent,
    ProfileComponent,
    BoardUserComponent,
    BoardWorkerComponent,
    ForgetPasswordComponent,
    UserCreateComponent,
    UserDisplayComponent,
    UserUpdateComponent,
    NotFoundComponentComponent,
    FooterAdminComponent,  
    ProfileComponent,
    ProfileListComponentComponent,
    ProfileFrontComponent,
    FeedbackBackComponent,
    StarRatingComponent,
    AllnotComponent,
    AllresComponent,
    ReservationComponent,
    FormationComponent,
    EvenementComponent,
    EventListComponent,
    EvenementBackendComponent,
    FormationBackComponent,
    FormationListComponent,
    MyprofileComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgxPaginationModule,
    NgxQRCodeModule,
  ],
  providers: 

  [  {
    provide: HTTP_INTERCEPTORS,
    useValue: {
      intercept: (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> => {
        const token = localStorage.getItem('token');

        if (token) {
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
        }

        return next.handle(req);
      }
    },
    multi: true
  }
  ,
    ReactiveFormsModule],
     bootstrap: [AppComponent],
     
     
     

    ListOrderComponent,
    OrdersComponent,
    ProductViewDtoComponent,
    Order1Component,
    NotFoundComponentComponent,
    WelcomePageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule, MatMenuModule,
    CommonModule,


  ],
  providers: [OrderService, CurrencyPipe],

  bootstrap: [AppComponent]
})
export class AppModule { }
