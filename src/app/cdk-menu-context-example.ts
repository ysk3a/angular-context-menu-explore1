import {Component} from '@angular/core';

/** @title Context menu. */
@Component({
  selector: 'cdk-menu-context-example',
  exportAs: 'cdkMenuContextExample',
  styleUrls: ['cdk-menu-context-example.css'],
  templateUrl: 'cdk-menu-context-example.html',
})
export class CdkMenuContextExample {
  list = [{
    id: 1
  },{
    id: 2
  },{
    id: 3
  },{
    id: 4
  }]
  data = null
  counter = 1;
  increment() {
    this.counter++;
  }
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */