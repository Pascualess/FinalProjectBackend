// Generated by https://quicktype.io

export interface NearbySearch {

  html_attributions: any[];
  results: Result[];
  status: string;
}

export interface Result {
  business_status: BusinessStatus;
  geometry: Geometry;
  icon: string;
  icon_background_color: IconBackgroundColor;
  icon_mask_base_uri: string;
  name: string;
  opening_hours?: OpeningHours;
  photos: Photo[];
  place_id: string;
  plus_code: PlusCode;
  rating: number;
  reference: string;
  scope: Scope;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
  price_level?: number;
}

export enum BusinessStatus {
  Operational = "OPERATIONAL",
}

export interface Geometry {
  location: Location;
  viewport: Viewport;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Location;
  southwest: Location;
}

export enum IconBackgroundColor {
  Ff9E67 = "#FF9E67",
  The13B5C7 = "#13B5C7",
  The7B9Eb0 = "#7B9EB0",
}

export interface OpeningHours {
  open_now: boolean;
}

export interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

export interface PlusCode {
  compound_code: string;
  global_code: string;
}

export enum Scope {
  Google = "GOOGLE",

}
