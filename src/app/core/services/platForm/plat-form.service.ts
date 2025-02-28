import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatFormService {
  constructor(@Inject(PLATFORM_ID) private platForm_Id : object) { };
  checkingPlatForm() :boolean
  {
    if(isPlatformBrowser(this.platForm_Id)) {
      return true;
    }
    return false;
  }
}
