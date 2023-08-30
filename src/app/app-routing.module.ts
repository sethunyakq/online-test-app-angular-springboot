import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { AddQuestionComponent } from './add-question/add-question.component';

const routes: Routes = [
  {path: 'quiz', component: QuizComponent},
  {path: 'add', component: AddQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
