// Generated by https://quicktype.io

export interface TextSearch {
  html_attributions: any[];
  next_page_token: string;
  results: Result[];
  status: string;
}

export interface Result {
  business_status: BusinessStatus;
  formatted_address: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: IconBackgroundColor;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: OpeningHours;
  photos: Photo[];
  place_id: string;
  plus_code: PlusCode;
  price_level?: number;
  rating: number;
  reference: string;
  types: Type[];
  user_ratings_total: number;
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

export enum Type {
  Bar = "bar",
  Establishment = "establishment",
  Food = "food",
  MealTakeaway = "meal_takeaway",
  NightClub = "night_club",
  PointOfInterest = "point_of_interest",
  Restaurant = "restaurant",
  Store = "store",
}

export interface Result {
  business_status: BusinessStatus;
  formatted_address: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: IconBackgroundColor;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: OpeningHours;
  photos: Photo[];
  place_id: string;
  plus_code: PlusCode;
  price_level?: number;
  rating: number;
  reference: string;
  types: Type[];
  user_ratings_total: number;
}
