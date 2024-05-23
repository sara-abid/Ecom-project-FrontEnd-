import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Message: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form is valid. Sending email...');
      this.sendEmail();
    } else {
      alert('User form is not valid!!');
    }
  }

  sendEmail() {
    const templateParams = {
      from_name: this.userForm.value.Name,
      from_email: this.userForm.value.Email,
      message: this.userForm.value.Message
    };

    emailjs.send('service_igra8g5', 'template_9ve05e9', templateParams, 'LmbYI3cTBdN6FlQia')
    .then((response: EmailJSResponseStatus) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }, (error: any) => {
      console.error('FAILED...', error);
      alert('Failed to send message. Please try again.');
    });
}
}
