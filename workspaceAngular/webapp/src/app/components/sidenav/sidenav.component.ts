import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SectionService } from '../../services/section.service';
import { Section } from '../../models/Section';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() title: string;
  menuItems: Section[];

  mode = new FormControl('push');

  constructor(private sectionService: SectionService) {}

  ngOnInit() {
    this.menuItems = this.sectionService.getSections();
  }
}
