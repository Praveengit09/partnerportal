/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationError } from '@angular/router';
import { Config } from './base/config';
import { SpinnerService } from './layout/widget/spinner/spinner.service';
declare var ga: any;
export const ROOT_SELECTOR = 'app';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: ROOT_SELECTOR,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './scss/application.scss'
  ],
  template: `<router-outlet></router-outlet><toaster></toaster>`
})
export class App {
  constructor(_router: Router, spinner: SpinnerService) {
    try {
      if (Config.TEST_TYPE === Config.BUG_FIX_MODE && Config.TEST_TYPE < Config.AWS_DEMO) {
        let type = +localStorage.getItem('changeTestType');
        if (+type == -1) { type = 2 }
        if (+type) {
          Config.changeTestType(+type);
        }
      } else {
        localStorage.removeItem('changeTestType');
      }
    } catch (error) {
      console.error(error);
    }
    _router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        // console.log(event, "route change started");
        spinner.start();
      }

      if (event instanceof NavigationEnd) {
        // console.log(event, "route change ended");
        spinner.stop();
      }

      if (event instanceof NavigationError) {
        console.log(event, "route change error");
        spinner.stop();
      }
    });

    if (Config.TEST_TYPE == 6 || Config.TEST_TYPE == 7) {
      let self = this;
      // window.addEventListener('contextmenu', (e) => self.preventMouseRightClick(e));
      // document.onkeydown = function (e) { self.disableInspectElement(e) }
    }
    $(window).on('popstate', function (event) {
      (<any>$(".modal")).modal('hide');
      $('.modal-backdrop').remove();
    });
  }
  preventMouseRightClick(event): boolean {
    event.preventDefault();
    return false;
  }
  disableInspectElement(e) {

    if (e.keyCode == 123) {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      e.preventDefault();
      return false;
    }

  }
}
