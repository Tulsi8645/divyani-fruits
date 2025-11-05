export interface Product {
  id: string;
  name: string;
  origin: string;
  season: string;
  specs: string;
  packing: string;
  description: string;
  image: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  website: string;
  hours: string;
}
