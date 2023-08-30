import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "http://localhost:8080/api";
  private userUrl = "http://localhost:8080/users";

  constructor(private httpClient: HttpClient){}

  getQuestions(){
    return this.httpClient.get(this.apiUrl + '/questions');
  }

  submitAnswers(answers:any){
    return this.httpClient.post(this.apiUrl + '/submit',answers);
  }

  addQuestion(question:any){
    return this.httpClient.post(this.apiUrl + '/addQuestion', question);
  }

 
}
