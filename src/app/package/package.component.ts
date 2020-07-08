import { Component, Input } from '@angular/core';
import { Package } from '../models/client';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent {
@Input() package: Package;

}
