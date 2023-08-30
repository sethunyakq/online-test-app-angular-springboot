import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AddQuestionComponent } from './add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
