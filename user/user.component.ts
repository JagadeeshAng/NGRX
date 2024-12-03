import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app/store/app.state';
import { incrementalCounter } from '../app/store/counter.action';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
constructor(private store: Store<AppState>) {

}
Incc() {
  this.store.dispatch(incrementalCounter());
}
}
