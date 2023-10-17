import { Component } from '@angular/core';
import { Items } from 'src/app/Items';
import { ItemsReq } from 'src/app/ItemsReq';
import { FormRoutesService } from 'src/app/services/form-routes.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  constructor(private servForm: FormRoutesService){
  };

  async handleForm(event: Items){
    console.log('tcholas')

    const formData: ItemsReq = {
      title: event.title,
      amount: +event.amount,
      type: event.type,
    };

    // formData.append('title', event.title);
    // formData.append('amount', event.amount.toString());
    // formData.append('type', event.type);

    await this.servForm.postRoute(formData).subscribe();
  }
}
