import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { faVirus } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {
coidArray;
showsnip:boolean=false;
faVirus = faVirus;
infected;
  constructor(private postservice: PostService) { }

  ngOnInit(): void {
    this.postservice.covid().subscribe(
      (res) => {
        // setTimeout(() => {
          this.coidArray = Array.of(res);
        
        if (this.coidArray[0].status == 'ok') {
          
          this.showsnip = true;

        }
        
        // }, 3000);
        
    
      },
    );

}

}

