import {UIRouter, UIRouterModule} from '@uirouter/angular';
import {Injector, NgModule} from '@angular/core';
import {STATES} from './consts/states';
import {states} from './app.routes';

@NgModule({
  imports: [
    UIRouterModule.forRoot({
      states,
      otherwise: {state: STATES.APP_DASHBOARDS},
      useHash: false,
      config(router: UIRouter, injector: Injector) {
        console.log(router);
        router.urlService.rules.otherwise({state: STATES.APP_DASHBOARDS});
      }
    })
  ],
  exports: [UIRouterModule]
})
export class AppRoutingModule {}
