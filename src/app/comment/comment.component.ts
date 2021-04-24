import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { PostService } from '../post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  healthArray;

  constructor(private postservice : PostService) { }

  ngOnInit(): void {
    this.postservice.getPost().subscribe(
      (res) => {

        this.healthArray = Array.of(res);
        console.log(this.healthArray);
        
        
      },  
    );

  }
 


  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };
}
