import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Items } from 'src/app/Items';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Items>();
  transactionForm!:FormGroup;

  ngOnInit(): void{
    this.transactionForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
    })
  }

  constructor(){};

  get title(){
    return this.transactionForm.get('title')!;
  }

  get amount(){
    return this.transactionForm.get('amount')!;
  }

  get type(){
    return this.transactionForm.get('type')!;
  }

  submit(){
    if(this.transactionForm.invalid){
      return;
    }
    console.log('sent');
    this.onSubmit.emit(this.transactionForm.value);
    location.reload();
  }
}
