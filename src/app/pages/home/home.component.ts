import { Component, OnInit } from '@angular/core';
import { AirTableApiService } from 'src/app/shared/data-access';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private airTableApiService: AirTableApiService) { }

  ngOnInit(): void {
  }

  onSignupNewsLetter(email: string) {
    this.airTableApiService.addEmail(email).subscribe(console.log)
  }
}
