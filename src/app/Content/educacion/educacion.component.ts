import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/auth/login.service';
import { User } from 'src/app/service/auth/user';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit, OnDestroy {
  userLoginOn:boolean = false;
  userData?:User;
  constructor(private loginService:LoginService) {}
  ngOnDestroy(): void {
    this.loginService.currentUserData.unsubscribe();
    this.loginService.currentUserLoginOn.unsubscribe();
  }
  
  
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });
    this.loginService.currentUserData.subscribe({
      next:(userData) =>{
        this.userData = userData;
      }
    });
  }


}
