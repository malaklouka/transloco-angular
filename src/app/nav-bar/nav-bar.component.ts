import { Component, isDevMode, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavBarComponent  {

  isDev = isDevMode()
  siteLanguage ?: string | undefined
  siteLocale !: string
  languageList = [
    { code: 'en-US', label: 'English' },
    { code: 'fr', label: 'French' },
    { code: 'es', label: 'Spanish' },
  ]

  constructor(private service: TranslocoService) { }


  changeSiteLanguage(language: string): void {
    this.service.setActiveLang(language);
    this.siteLanguage = this.languageList.find(
      (f) => f.code === this.siteLocale
    )?.label
   }

  onChange(selectedLangCode: string) {
    window.location.href = `/${selectedLangCode}`
  }
}

