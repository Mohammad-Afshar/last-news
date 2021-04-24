import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sportArray;
  showsnip:boolean=false;
  constructor(private postservice: PostService ) { }

  ngOnInit(): void {
    this.postservice.sports().subscribe(
      (res) => {
        // setTimeout(() => {
          this.sportArray = Array.of(res);
        
        if (this.sportArray[0].status == 'ok') {
          
          this.showsnip = true;

        }
        // }, 2500);
        
    
      },
    );

}
}