import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import {CompanyService} from "../../../services/company.service";
import Util from "../../../Util";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(
    private location: Location,
    private us: UserServiceService,
    private cs: CompanyService,
    private router: Router
  ) { }

  public company_personal: boolean = false;
  public toggle: String = "login";
  public terms_condition: boolean = false;
  public term_modal: boolean = false;
  public privacy_modal: boolean;
  public passwordViewToggle: boolean = false;
  public confirmedPassword: string;
  public isLoadingResults: boolean = false;
  public show_process: boolean = false;

  public user: User = new User();
  public company: any = {
    name: "",
    website: "",
    creator: ""
  };

  public step: number = 1;
  public err = {
    email: [],
    password: [],
    name: [],
    noAccount: "",
  };

  ngOnInit() {
    if (location.href == "http://localhost:4200/register") {
      this.toggle = "register"
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.term_modal = false;
      this.privacy_modal = false;
    }
  }

  public confirmUser() {
    this.step = 2;
  }

  public getValFromTxtCompo(e?: string, name?: string) {
    this.company[name] = e;
  }

  public selectType(evt) { }

  public login() {
    if (this.validationUserLogin()) {
      this.us.login(this.user)
        .subscribe(res => {
          this.us.user = res.user;
          if (res.token) {
            localStorage.setItem('token', res.token);
            localStorage.setItem("loggedIn", "true");
            this.router.navigate(['dashboard']).then(r => r);
            this.getCompanyInfo();
          } else {
            this.err.noAccount = "No account found";
          }
        })
    }
  }

  public getCompanyInfo(){
    return this.cs.getCompanyInfo(this.us.user.companyID)
      .subscribe(res => {
      this.cs.company = res;
    })
  }

  public register() {
    if (this.terms_condition && this.validationUserSignUp()) {
      if (this.company_personal) {
        this.show_process = true;
      } else {
        this.us.register(this.user)
          .subscribe(res => {
            this.toggle = "login"
          }, (err) => {
            console.log(err);
            alert(err.error);
          });
      }
    }
  }

  public createCompany() {
    this.us.register(this.user)
      .subscribe(res => {
        this.toggle = "login";
        this.company.creator = res.user.id;
        this.cs.createCompany(this.company).subscribe( res => {
            console.log(res);
          }, (err) =>{
            console.log(err);
          }
        )
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }

  public validationUserSignUp() {
    this.flushErr();
    return Util.validationUserSignUp(this.user.email,this.user.name, this.user.password, this.confirmedPassword, this.err)
  }

  public validationUserLogin() {
    this.flushErr();
    return Util.validationUserLogin(this.user.email, this.user.password, this.err)
  }

  public validateEmail(email: String) {
    return Util.validateEmail(email)
  }

  public flushErr() {
    this.err = {
      noAccount: "",
      email: [],
      password: [],
      name: []
    }
  }

  public togglePasswordView() {
    this.passwordViewToggle = !this.passwordViewToggle;
  }

  public toggleViews(n: string) {
    if (n == 'register') {
      this.location.replaceState('/register');
    } else {
      this.location.replaceState('/login');
    }
    this.user = new User();
    this.toggle = n;
    this.err = {
      email: [],
      password: [],
      name: [],
      noAccount: ""
    }
  }

  public showTerms() {
    this.term_modal = !this.term_modal;
  }

  public showPrivacy() {
    this.privacy_modal = !this.privacy_modal;
  }

  closeModal() {
    this.privacy_modal = false;
    this.term_modal = false;
  }
}
