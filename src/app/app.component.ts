import { Component } from '@angular/core';
import 'eit-info-overlay/eit-info-overlay.js';
import '@dile/dile-modal/dile-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-wc';
  ngopened = false;

  toggleOverlay() {
    this.ngopened = !this.ngopened;
  }

  setClosed() {}

  setClosedModal(){
    this.ngopened = false;
  }
}
