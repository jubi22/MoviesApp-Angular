import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant-App';
  loadedfeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedfeature = feature;
  }


}
