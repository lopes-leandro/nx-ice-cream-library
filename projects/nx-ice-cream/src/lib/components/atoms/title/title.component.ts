import { Component, Input } from '@angular/core';
import { Tag } from './models/tag.enum';

@Component({
  selector: 'icm-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

  @Input() title!: string;

  @Input() tag: Tag = Tag.H1;
}
