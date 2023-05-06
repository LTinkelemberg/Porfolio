import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    contraseña: ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder) {

  }
    login() {
          console.log(this.loginForm.value);
          if(this.loginForm.valid) {
              console.log("llamar al servicio");
          } else {
            alert("Error");
          }
    }
    get email() { return this.loginForm.get('email'); }

    get contraseña() { return this.loginForm.get('contraseña'); }
}
