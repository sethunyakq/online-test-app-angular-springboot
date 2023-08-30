import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  questions: any[] = [];
  userAnswers:any = {};
  results:{[questionId:number]:string} = {};
  showResults!:boolean;
  constructor(private ds: DataService){}

  ngOnInit():void{
    this.ds.getQuestions().subscribe({
      next: (response:any) => {
        console.log(response);
        this.questions = response;      
      },
      error: err=>console.log(err),
      complete: ()=> console.log("complete")
    })
  }

  submitAnswers(){
    console.log(this.userAnswers);
    this.ds.submitAnswers(this.userAnswers).subscribe({
      next: (result:any)=> {
        console.log(result);
        this.results = result;
        this.showResults = true;
      },
      error: (err:any)=>console.log(err)
    })

  }

}
