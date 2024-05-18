export interface DateDetails {
  time: string;
  available: boolean;
}

export interface Dates {
  [key: string]: DateDetails[];
}
