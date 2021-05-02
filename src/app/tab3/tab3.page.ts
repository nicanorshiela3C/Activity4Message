import { Component } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';
import { AlertController } from '@ionic/angular';
<<<<<<< HEAD
=======
import {Router, NavigationExtras} from '@angular/router';
>>>>>>> a7aa33c (Act4Message)

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
<<<<<<< HEAD
=======
  [x: string]: any;
>>>>>>> a7aa33c (Act4Message)
  contName = "";
  contLastname = "";
  contNumber = ""
  contacts: any = [];

  constructor(public contactService: ContactServiceService, public alertController: AlertController) 
  {}
<<<<<<< HEAD
  async ngOnInit(){
    this.contactService.getData().then(data => {
      this.contacts = data;
    });
  }
=======
  
>>>>>>> a7aa33c (Act4Message)
  saveC() {
    let contact = {
      name: this.contName,
      lastname: this.contLastname,
      number: this.contNumber 
    }
    this.contacts.push(contact);
    this.clearField();
    console.log(this.contacts);
  }
  clearField() {
    this.contName = "";
    this.contLastname = "";
    this.contNumber = "";
  }
<<<<<<< HEAD
=======
  navigateToMessage(data, i){
    console.log(i);
    console.log(data);
      let navigationExtras: NavigationExtras = {
      state: {
        special:{index: i, data: data}
        }
      };
      this.router.navigate(['/edit'], navigationExtras);
  }
>>>>>>> a7aa33c (Act4Message)
  async delete(cont){
    const alert = await this.alertController.create({
      header: 'Delete?',
      message: '',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'icon-color',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text:'Yes',
          cssClass:'icon-color',
          handler: () => {
            let index = this.contacts.indexOf(cont);
            if(index > -1){
              this.contacts.splice(index,1);
              console.log('Yes');
            }
          }
        }
      ]
    });
      await alert.present();

}
<<<<<<< HEAD
}
=======
}
>>>>>>> a7aa33c (Act4Message)
