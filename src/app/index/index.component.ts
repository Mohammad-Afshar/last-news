import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../post.service';
import { SwiperOptions } from 'swiper';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  snip: boolean = false;
  postsArray;
  sportArray;
  searchArray;
  @ViewChild('txt') txt: ElementRef;
  faUser = faUser;
  faClock = faClock;
  faRunning = faRunning;
  header:boolean=false;
  footer:boolean=false;
  constructor(private postservice: PostService, private router: Router) {}

  ngOnInit(): void {
    this.snip = true;
    setTimeout(() => {
      this.snip = false;
      this.postservice.getPost().subscribe((res) => {
        this.postsArray = Array.of(res);
        console.log(this.postsArray);
      });
      this.header=true;
      this.footer=true;
     
    }, 3000);
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
