import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './interfaces/IStudent';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor( private router: Router ){}
  ngOnInit(): void {
    this.router.navigate(['/home']);
  }
}