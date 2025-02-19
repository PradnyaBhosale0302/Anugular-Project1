import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "Pradnya";
  rollNumber: number = 222;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter Full Name";
  divClassName: string = "bg-primary";
  selectedCity: string = "";

  constructor()
  {
    console.log(this.firstName);
    this.firstName="Pdi";
    console.log(this.firstName);
    // this.showWelcomeMessage();
  }

  showWelcomeMessage()
  {
    alert("Welcome To Angular19 Tutorials");
  }
  onCityChanges()
  {
    console.log("City Changed");
  }
}
