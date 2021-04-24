import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
technologyArray;
  constructor(private postservice : PostService) { }

  ngOnInit(): void {
    this.postservice.technology().subscribe(
      (res) => {

        this.technologyArray = Array.of(res);
        console.log(this.technologyArray);
        
        
      },  
    );
  }

}
