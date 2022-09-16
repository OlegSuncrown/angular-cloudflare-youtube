import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/data-access';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSignupNewsLetter(email: string) {
    // this.apiService.addEmail(email).subscribe(console.log)
    this.apiService.addEmailMongo(email).subscribe(console.log)
  }
}
