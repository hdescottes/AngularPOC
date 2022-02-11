import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings-app-root',
  templateUrl: './settings-app.component.html',
  styleUrls: ['./settings-app.component.css']
})
export class SettingsAppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleTheme() {
    document.body.classList.toggle("dark-theme");
    document.querySelector("[data-menu-icon]")?.classList.toggle("dark-theme");
    document.querySelector("[data-header]")?.classList.toggle("dark-theme");
    document.querySelector("[data-sidebar]")?.classList.toggle("dark-theme");
    document.querySelectorAll("[data-list-item]").forEach(element => {
      element?.classList.toggle("dark-theme");
    })
    document.querySelectorAll("[data-list-item-icon]").forEach(element => {
      element?.classList.toggle("dark-theme");
    });
    document.querySelectorAll("[data-list-item-name]").forEach(element => {
      element?.classList.toggle("dark-theme");
    });
  }
}
