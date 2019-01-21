import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() titleApp: string;
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
}
