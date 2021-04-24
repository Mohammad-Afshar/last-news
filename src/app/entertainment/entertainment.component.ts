import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { faChessQueen } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {
entertArray;
faChessQueen=faChessQueen;
faClock = faClock;

  constructor(private postservice:PostService) { }

  ngOnInit(): void {
    this.postservice.entertainment().subscribe(
      (res) => {

        this.entertArray = Array.of(res);
        console.log(this.entertArray);
        
        
      },  
    );
  }

}
