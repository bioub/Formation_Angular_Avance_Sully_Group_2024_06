import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectComponent implements OnInit {

  @Input() items: string[] = [];
  @Input() selected!: string;

  @Output() selectedChange = new EventEmitter<string>();

  menuOpen = false;

  constructor() {
    console.log('select constructor', this.selected);
  }

  ngOnInit(): void {
    console.log('select ngOnInit', this.selected);
    if (!this.selected) {
      this.selected = this.items[0];
    }
  }

  openMenu() {
    this.menuOpen = true;
  }

  selectItem(item: string) {
    this.selected = item;
    this.menuOpen = false;
    this.selectedChange.emit(item);
  }

}
