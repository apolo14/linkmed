import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/providers/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(public menu: MenuService) { }

  ngOnInit() {
  }

}
