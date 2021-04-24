import { Component, OnInit } from '@angular/core';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faNewspaper  } from '@fortawesome/free-solid-svg-icons';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faMapMarker = faMapMarker;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faNewspaper = faNewspaper;
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