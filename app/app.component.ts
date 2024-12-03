import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { selectCount, selectCounterState } from './store/counter.selector';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { CommonModule } from '@angular/common';
import { decrementalCounter, incrementalCounter } from './store/counter.action';
import { UserComponent } from "../user/user.component";
// import { StoreModule } from '@ngrx/store';
// CommonModule

@Component({
  selector: 'app-root',
  imports: [CommonModule, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'my-app';
  counter$: Observable<number> = new Observable<number>;
  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(selectCount);
  }
  onIncrement() {
  this.store.dispatch(incrementalCounter());
  }
  onDecrement() {
  this.store.dispatch(decrementalCounter());
  }
}
