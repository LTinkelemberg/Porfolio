import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/auth/login.service';
import { LoginRequest } from 'src/app/service/auth/loginRequest';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLoginOn: boolean = false;
  loginError:string="";
  loginForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required,]],
  });
  constructor(private fb: FormBuilder, private loginService: LoginService) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn) => {
          this.userLoginOn = userLoginOn;
        }
      }
    )


  }

    login() {
          console.log(this.loginForm.value);
          if(this.loginForm.valid) {
              this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
                    next: (userData) => {;
                        if(userData!=null && userData.idUsuario!=null) {
                          document.getElementById("button_closeLogin")?.click();
                          this.userLoginOn = true;
                          this.loginForm.reset();
                        } else{
                          alert("No se encontro el Usuario, Intente nuevamente")
                          this.userLoginOn = false;
                        }
                        console.log(userData);
              },
                    error: (errorData) => {
                      console.error("fallo el servicio" +  errorData);
                      this.loginError=errorData;
                    },
                    complete: () => {
                      console.info("El Login fue completado");
                      
                    },
                    
                    
            });
              
          } else {
            alert("Error");
            this.loginForm.markAllAsTouched();
          }
    }
    get email() { return this.loginForm.get('email'); }

    get password() { return this.loginForm.get('password'); }
}
