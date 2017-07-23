import { Mix } from './mix.model';
export class User {

  constructor(public name: string,
              public mail: string, 
              public birthday: string,
              public password: string,
              public musicType: string,
              public mixes: Mix[]
                                  ) {
  }
}
