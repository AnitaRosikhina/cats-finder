import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Cat } from "../../interfaces/cats";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() items!: Cat.Entity[] | null;

  ngOnInit(): void {
  }
}
