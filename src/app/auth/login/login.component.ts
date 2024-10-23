import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastCtrl: ToastController,
    private cdr:ChangeDetectorRef,
  ) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    
  }

  ngOnInit() {
  }


  async  btnLogin(){
    const { username, password } = this.loginForm.value;
    console.log(username, password);
    if (username === 'testuser' && password === 'test@123') {
      const toast = await this.toastCtrl.create({
        message: 'Login successful!',
        duration: 2000,
        position:'bottom',
        color: 'success',
      });
      toast.present();
      await this.router.navigateByUrl('/layout/home');
      this.cdr.detectChanges();
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Invalid username or password.',
        duration: 2000,
        position:'bottom',
        color: 'danger',
      });
      toast.present();
    }
  }

}
