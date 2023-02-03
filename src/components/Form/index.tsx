export interface FormValidators {
    check: any;
    message: string;
    num?: number;
  }
  

  export interface FormModel {
    validators: FormValidators[];
  }
  