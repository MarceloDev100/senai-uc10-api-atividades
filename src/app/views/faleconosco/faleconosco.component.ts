import { Component, OnInit } from '@angular/core';
import { ContactUs } from 'src/app/models/contact-us';

@Component({
  selector: 'app-faleconosco',
  templateUrl: './faleconosco.component.html',
  styleUrls: ['./faleconosco.component.css']
})
export class FaleconoscoComponent implements OnInit {

  contactUsElement: HTMLScriptElement;

  constructor() {
     this.contactUsElement = document.createElement("script");
     this.contactUsElement.src = "assets/faleconosco.js";
     document.body.appendChild(this.contactUsElement);
  }

  ngOnInit(): void {
  }

  contactUs = new ContactUs("", "", "", "", "")

  onSubmit(){
    console.log(this.contactUs)
  }

}
