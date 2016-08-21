'use strict';

import { Component }              from '@angular/core';
import { FormBuilder, FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Range, TextInput }       from 'ionic-angular';
import { SignatureField }         from '../../components';

@Component({
  templateUrl: 'build/pages/page2/page2.html',
  directives: [SignatureField, Range, TextInput, REACTIVE_FORM_DIRECTIVES],
})

export class Page2 {

  // demonstrating #108
  private rangeValue: number;
  private inputValue: string;
  private form: FormGroup;

  constructor(fb: FormBuilder) {

    this.rangeValue = 33;
    this.inputValue = 'some text';

    this.form = fb.group({
      signatureField: '',
    });
  }

  public onGainChange(): void {
    return;
  }
}
