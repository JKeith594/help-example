import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid-help',
  templateUrl: './invalid-help.component.html',
  styleUrls: ['./invalid-help.component.scss']
})
export class InvalidHelpComponent implements OnInit {

  invalidRoute: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.invalidRoute = this.router.url.slice(this.router.url.indexOf("/help/") + 5);
  }

}
