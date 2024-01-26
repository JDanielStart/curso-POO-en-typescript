export enum AccessType {
  PRIVATE = "private",
  PUPLIC = "public"
}

export interface Category {
  id:         number;
  name:       string;
  image:      string;
  access?: AccessType;
}
