import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  healthArray;
  faClock = faClock;
  faUser = faUser;


  constructor(private postservice : PostService) { }

  ngOnInit(): void {
    this.postservice.health().subscribe(
      (res) => {

        this.healthArray = Array.of(res);
        console.log(this.healthArray);
        
        
      },  
    );

  }
 
}
