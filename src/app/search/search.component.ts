import { Component, ElementRef, OnInit,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchArray;
linkActive:boolean=false;
noresult:boolean=false;
searchactive:boolean=true;
footer:boolean=false;

faSearch = faSearch;
textsearh:string='';
  constructor(private postservice:PostService) { }

@ViewChild ('txt') txt:ElementRef;
  ngOnInit(): void {
  }


  onSubmit(form: NgForm) {
    this.textsearh = this.txt.nativeElement.value;
    this.postservice.url2 +=
      this.txt.nativeElement.value ;
      this.postservice.url2 +=
      '&language=en&apiKey=08b0bbb1bb1f44f7b863bb76b1a47057';
     
      
      console.log(this.txt.nativeElement.value);
      console.log(this.textsearh);
    this.postservice.searchGetPost().subscribe((res) => {

      this.searchArray = Array.of(res);
      console.log(this.searchArray);
      
      this.postservice.url2 = ''
      this.postservice.url2 = 'https://newsapi.org/v2/everything?q='
      
      form.reset()

      if (this.searchArray[0].totalResults == 0) {
        this.noresult = true
        this.searchArray=[]
      } else{
        this.noresult = false;
        this.linkActive=true;
        this.searchactive=false;
        this.footer=true;

      }
    });
  }
}
