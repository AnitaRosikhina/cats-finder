import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Cat } from "../../interfaces/cats";
import { startWith } from "rxjs";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {

  @Input() breeds!: Cat.Breed[] | null;

  @Output() valueChanged: EventEmitter<{ breed: string; limit: string }> = new EventEmitter();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      breed: ['all'],
      limit: [10]
    });

    this.form.valueChanges
      .pipe(
        startWith({breed: 'all', limit: '10'})
      )
      .subscribe((res) => {
      this.valueChanged.emit(res);
    })
  }
}
