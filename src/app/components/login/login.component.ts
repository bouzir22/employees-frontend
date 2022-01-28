import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
token;
  constructor(private auth:AuthService , private route:Router) { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
tryLogin()
{return this.auth.tryLogin(this.profileForm.value).subscribe({

next:response => {this.token=response['token']
console.log(this.token)
sessionStorage.setItem("token","Bearer "+this.token)
console.log(typeof(this.token))
this.route.navigateByUrl("/dashboard")

},
error:err => {alert("wrong email or password")}

})}


}

export class loginResponse{
  username:string ="";
  token:string ="";
}