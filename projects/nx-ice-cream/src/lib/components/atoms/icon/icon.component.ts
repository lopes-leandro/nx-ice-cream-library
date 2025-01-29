import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'icm-icon',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() name!: string;
  @Input() size: string = '1rem';
  @Input() color?: string;
}
