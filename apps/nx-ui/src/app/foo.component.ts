import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'foo',
  template: `im foo!`,
})
export class FooComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [FooComponent],
  imports: [],
})
export class FooComponentModule {}
