import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  questionForm: FormGroup;

  constructor(private ds:DataService, private fb:FormBuilder){
    this.questionForm = this.fb.group({
      questionText: ['', Validators.required],
      correctAnswer:['', Validators.required]
    })
  }

  onSubmit(){
    if(this.questionForm.valid){
      const question = this.questionForm.value;
      this.ds.addQuestion(question).subscribe({
        next: response=> {console.log(response);
          this.questionForm.reset();
        },
        error: err=>console.log(err)

      })
    }
  }

}
