import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  showAnswer(ans: HTMLElement, icon: HTMLElement){

    if(ans.style.display === 'none'){
      ans.style.display = 'block';
      icon.classList.remove('fa-chevron-down')
      icon.classList.add('fa-chevron-up')

    }else{
      ans.style.display = 'none';
      icon.classList.remove('fa-chevron-up')
      icon.classList.add('fa-chevron-down')
    }

  }
}
