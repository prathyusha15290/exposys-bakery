import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  courses()
  {
    this.router.navigate(['courses'])
  }
  dashboard()
  {
    this.router.navigate(['dashboard'])
  }
 about()
  {
    this.router.navigate(['about'])
  }

}
