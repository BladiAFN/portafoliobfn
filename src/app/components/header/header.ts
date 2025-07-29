import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const links: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('#hs-navbar-header-floating a');

    links.forEach(link => {
      link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('nav-active'));
        link.classList.add('nav-active');
      });
    });
  }
  activeSection: string = 'experience';

  setActive(section: string): void {
    this.activeSection = section;
  }

}
