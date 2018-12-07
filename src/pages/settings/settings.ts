import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';
import { SettingsService } from '../../service/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

    constructor(private settingsService: SettingsService){}

    changeBackground(toggle: Toggle){
        this.settingsService.setBackground(toggle.checked);
    }

    isAltBackground(): boolean{
        return this.settingsService.isAltBackground();
    }
}
