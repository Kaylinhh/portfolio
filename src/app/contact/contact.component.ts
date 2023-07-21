import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Contact } from '../shared/models/contact.model';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  contact!: Contact;
  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(){
    this.initForm();
  }

  private initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.compose([Validators.required, Validators.email])]],
      message: ["", [Validators.required]]
    })
  }

  public sendEmail(e: Event) {
    emailjs.sendForm('service_5k4lkc4', 'contact_form', e.target as HTMLFormElement, 'h9aYqpdF2D8Tkh8fT')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      this.initForm();
  }

}
