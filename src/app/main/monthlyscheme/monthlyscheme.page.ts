import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthlyscheme',
  templateUrl: './monthlyscheme.page.html',
  styleUrls: ['./monthlyscheme.page.scss'],
})
export class MonthlyschemePage implements OnInit {
   toggle1 = true;
   toggle2 = true;
   toggle3 = true;
   toggle4 = true;
   toggle5 = true;

  constructor() { }

  ngOnInit() {
  }
  onToggle(status){
   if(status === '12'){
    this.toggle1 = !this.toggle1;
   }
   if(status === '24'){
    this.toggle2 = !this.toggle2;
   }
   if(status === '36'){
    this.toggle3 = !this.toggle3;
   }
   if(status === '48'){
    this.toggle4 = !this.toggle4;
   }
   if(status === '60'){
    this.toggle5 = !this.toggle5;
   }

  }
}
