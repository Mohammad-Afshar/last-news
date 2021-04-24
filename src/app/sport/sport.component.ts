import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
  sportArray;
  faUser = faUser;
  faClock = faClock;
  faRunning = faRunning;
  constructor(private postservice: PostService) { }

  ngOnInit(): void {
    this.postservice.sports().subscribe(
      (res) => {

        this.sportArray = Array.of(res);
        console.log(this.sportArray);
        
        
      },  
    );
  }

}
