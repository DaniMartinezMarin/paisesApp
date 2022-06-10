import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer$: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.debouncer$
    .pipe(debounceTime(300))
    .subscribe((data) => {
      this.onDebounce.emit(data);
    });
  }

  buscar(): void {
    this.onEnter.emit(this.termino);
  }

  onKeyPress(): void {
    this.debouncer$.next(this.termino);
  }
}
