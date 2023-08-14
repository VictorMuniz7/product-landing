import { Component } from '@angular/core';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss']
})
export class RegisteredComponent {

  background = ''

  changeBg(){
    this.background = "url('../../../../assets/registeredBack.jpg')";
    setTimeout(() => {
      this.background = ''
    }, 300)

  }
}
