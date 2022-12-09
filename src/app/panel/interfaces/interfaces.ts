export interface Section {
  name: string;
  updated: Date;
}

export interface Amount {
  _id?:  string;
  name: string;
  user: string;
  quantity: number;
  img_url?: string;
  category?: number;
  create_at: Date;
  update_at?: Date;
  paid: boolean;
  date_paid?: Date;

  }

export interface Category {
  id: number
  name: string;
  img_url: string;
}

export interface CategorysResponse {
  entrances: Category[],
  spents: Category[]
}
