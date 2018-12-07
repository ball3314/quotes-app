
export class SettingsService{
    private altBackground = false;

    setBackground(isAlt?: boolean){
        if(isAlt == undefined){
            this.altBackground = !this.altBackground;
        } else {
            this.altBackground = isAlt;
        }
    }

    isAltBackground(): boolean{
        return this.altBackground;
    }
}
