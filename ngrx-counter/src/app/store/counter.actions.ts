export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBSTRACT_COUNTER = "SUBSTRACT_COUNTER";
export const MULTIPLY = "MULTIPLY";

export class Increment{
  readonly type = INCREMENT;
  constructor(){}
}

export class Decrement{
  readonly type = DECREMENT;
  constructor(){}
}

export class AddCounter{
  readonly type = ADD_COUNTER;
  constructor(public payload : number){}
}

export class SubstractCounter{
  readonly type = SUBSTRACT_COUNTER;
  constructor(public payload : number){}
}

export class Multiply{
  readonly type = MULTIPLY;
  constructor(public payload : number){}
}

export type ActionTypes = Increment | Decrement | AddCounter | SubstractCounter | Multiply;


