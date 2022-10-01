import { Component, OnInit } from '@angular/core';
import { HelptoolService } from 'src/app/helptool/helptool.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private helpService: HelptoolService) { }

  ngOnInit(): void {
  }

  openHelp() {
    this.helpService.navigateToHelpPageForCurrentPage();
  }

}
