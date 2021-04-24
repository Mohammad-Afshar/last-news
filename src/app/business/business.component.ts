import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
businessArray;
faClock = faClock;
faChartBar = faChartBar;
  constructor(private postservice:PostService) { }

  ngOnInit(): void {
    this.postservice.business().subscribe(
      (res) => {

        this.businessArray = Array.of(res);
        console.log(this.businessArray);
        
        
      },  
    );
  }

}
