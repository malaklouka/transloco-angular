import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translocoService: TranslocoService
  ) {}

  title = 'phrase-transloco-i18n';

  ngOnInit() {
    this.translocoService.translate('hello');
    this.translocoService.translate('hello', { value: 'world' });

    // Translate a key from a specific scope
  }
}
