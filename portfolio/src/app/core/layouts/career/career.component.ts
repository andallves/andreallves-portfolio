import { Component } from '@angular/core';
import { Icon } from '#core/models/entities/icon';
import { HeadingComponent } from '#shared/components/heading/heading.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
  icon: Icon = {
    pathIcon: './assets/career.png',
    altText: 'icone de trabalho',
    width: '22',
    height: '22',
  };
}
