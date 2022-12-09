import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularFireModule} from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './home/content/content.component';
import { LocationComponent } from './home/content/location/location.component';
import { AppointmentComponent } from './home/content/appointment/appointment.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DoAppointmentComponent } from './home/content/location/do-appointment/do-appointment.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ContentComponent,
    LocationComponent,
    AppointmentComponent,
    DoAppointmentComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,MatCardModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    MatNativeDateModule,
    MatIconModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
