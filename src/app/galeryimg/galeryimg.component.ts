import { Component, OnInit } from '@angular/core';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-galeryimg',
  templateUrl: './galeryimg.component.html',
  styleUrls: ['./galeryimg.component.scss']
})
export class GaleryimgComponent implements OnInit {
  faCameraRetro=faCameraRetro;
  constructor() { }

  ngOnInit(): void {
  }

}
