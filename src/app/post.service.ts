import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './ipost';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // url index
  url =
    'https://newsapi.org/v2/top-headlines?language=en&apiKey=08b0bbb1bb1f44f7b863bb76b1a47057';

  // url search
  url2 = 'https://newsapi.org/v2/everything?q=';

  // url sport
  url3 =
    'https://newsapi.org/v2/top-headlines?language=en&category=sports&apiKey=08b0bbb1bb1f44f7b863bb76b1a47057';

  // url covid19
  urlCovid =
    'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true';

  // url health
  urlHealth =
  'https://newsapi.org/v2/top-headlines?language=en&category=health&apiKey=08b0bbb1bb1f44f7b863bb76b1a47057';

  urlBusi =
  'https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=08b0bbb1bb1f44f7b863bb76b1a47057';

  urlTechnology =
  'https://newsapi.org/v2/top-headlines?language=en&category=technology&apiKey=08b0bbb1bb1f44f7b863bb76b1a47057';

  urlEntertainment =
  'https://newsapi.org/v2/top-headlines?language=en&category=entertainment&apiKey=08b0bbb1bb1f44f7b863bb76b1a47057';

  

  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get(this.url);
  }

  searchGetPost() {
    return this.http.get(this.url2);
  }

  sports() {
    return this.http.get(this.url3);
  }

  covid() {
    return this.http.get(this.urlCovid);
  }

  health() {
    return this.http.get(this.urlHealth);
  }

  business(){
    return this.http.get(this.urlBusi);
  }
  
  entertainment(){
    return this.http.get(this.urlEntertainment);
  }

  technology(){
    return this.http.get(this.urlTechnology);
  }
  
  postPost(post: IPost) {
    return this.http.post(this.url2, post);
  }

  // postPut(post: IPost, id: number) {
  //   return this.http.put(this.url + "/" + id, post);
  // }
}
