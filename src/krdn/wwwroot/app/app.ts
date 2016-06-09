///<reference path="../../typings/browser.d.ts" />
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

//export class Hero {
//    id: number;
//    name: string;
//}


@Component({
    selector: 'my-app',
    //templateUrl: './app/app.html',
    template: `
    <h1>{{title}}</h1>
    <nav>
<a [routerLink]="['Dashboard']">Dashboard</a>
    </nav>
    `,
    styleUrls: ['./app/app.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])
export class AppComponent {
    title = 'Tour of Heroes';
    //hero: Hero = {
    //    id: 1,
    //    name: 'Windstorm'
    //};
}

bootstrap(AppComponent);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/