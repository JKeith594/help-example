import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelptoolService {

  constructor(private router: Router) { }

  navigateToHelpPageForCurrentPage() {
    let currentUrl = this.router.url;
    if(!currentUrl.includes('/help/')) {
      console.log('help' + currentUrl); // this will navigate to /help/(whatever route you were on)
      this.router.navigate(['help' + currentUrl]);
    } else {
      alert("You can't get help for help!"); // You could do whatever you wanted here
    }
  }
}
