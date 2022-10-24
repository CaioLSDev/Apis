import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
  }
    userModel = new User ();

msgm = ""

    receberDados() {this.loginService.login (this.userModel).subscribe((response) => {
      console.log(response)
      alert("Bem Vindo a Nárnia")
      this.router.navigateByUrl("/")

      }, (erro) => {
        //console.log(erro.error)
        alert("You Shall Not Pass!")

        if (erro.error == "Email and password are required") {
          this.msgm = "É necessário inserir E-Mail e Senha"
        } else if (erro.error == "Incorrect password") {
          this.msgm = "Senha Incorreta"
        } else

        this.msgm = erro.error

      })

    }
}


// console.log(this.userModel)

