import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TopLevel } from '../interfaces/toplevel';
import { Category } from '../interfaces/category';
import { Result } from '../interfaces/result';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  categoriesUrl: string = 'https://opentdb.com/api_category.php';

  constructor(
    private http: HttpClient
  ) { }

  getCategoriesObservable(): Observable<Array<Category>> {
    return this.http.get<TopLevel>(this.categoriesUrl).pipe(
      map((obj: TopLevel) => {
        return obj.trivia_categories;
      })
    );
  } 

  getQuestionsObservable(
    amountOfQuestions: number,
    categoryId: number,
    difficulty: string,
    questionType: string
  ): Observable<Array<Result>> {
    const a = amountOfQuestions ? `?amount=${amountOfQuestions}` : '';
    const c = categoryId ? `?category=${categoryId}` : '';
    const d = difficulty ? `?difficult=${difficulty}` : '';
    const qt = questionType ? `?type=${questionType}` : '';
    const url = `https://opentdb.com/api.php${a}${c}${d}${qt}`;
    return this.http.get<TopLevel>(url).pipe(
      map((obj: TopLevel) => {
        return obj.results;
      })
    )
  }
}