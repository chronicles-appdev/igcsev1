import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  showSplash = true;
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.showSplash = false;

    //  this.router.navigateByUrl('splash');

    }, 5000);
  }

}
