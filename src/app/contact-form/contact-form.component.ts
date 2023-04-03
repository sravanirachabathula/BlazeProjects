import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  ngOnInit(): void {
    const ContactForm=new FormGroup({
      firstname: new FormGroup(""),
      lastname: new FormGroup(""),
      email: new FormGroup(""),
      mobile: new FormGroup(""),
      gender: new FormGroup(""),
      pwd: new FormGroup(""),
      rpwd: new FormGroup("")
      
      


    });

  }
}
