import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactiveFormAngular';
  myForm: FormGroup;
  nama;
  email;
  telepon;
  keterangan;
  submitted = false;

  ngOnInit() {
    this.myForm = new FormGroup({
      nama : new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      telepon: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      keterangan: new FormControl(null, [Validators.required])
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.myForm);
    this.nama = this.myForm.controls.nama.value;
    this.email = this.myForm.controls.email.value;
    this.telepon = this.myForm.controls.telepon.value;
    this.keterangan = this.myForm.controls.keterangan.value;
  }
  onResetForm() {
    this.myForm.reset();
    this.nama = '';
    this.email = '';
    this.telepon = '';
    this.keterangan = '';
  }
}
