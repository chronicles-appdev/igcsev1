import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.page.html',
  styleUrls: ['./activate.page.scss'],
})
export class ActivatePage implements OnInit {

  selectedSegment ='activate';
  activationCode!: string;

  constructor() { }

  ngOnInit() {
  }

}
