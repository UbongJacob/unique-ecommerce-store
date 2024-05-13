interface IProductVariant {
  id: number;
  variant_type: string;
  variant_attribute: string;
  variant_quantity: string;
  variant_sku: string;
  variant_price: string;
}

interface IProductImage {
  id: number;
  image_url: string;
}

interface IVendor {
  id: number;
  business_name: string;
  business_name_slug: string;
}

export interface IProduct {
  id: number;
  vendor_id: number;
  name: string;
  name_slug: string;
  featured_image: string | null;
  category_id: number;
  category_name: string;
  category_slug: string;
  brand_id: number;
  brand_name: string;
  brand_slug: string;
  product_type: "compand_product" | "simple_product";
  in_stock: number;
  price: number;
  discount_price: number;
  discount: string;
  status: "published" | "unpublished";
  is_approved: number;
  sku: string;
  video_link: string | null;
  description: string;
  product_images: IProductImage[];
  product_variants: IProductVariant[];
  vendor: IVendor;
  created_at: string;
  product_review: {
    total_verified_reviews: number;
    average_star_rating: number;
  };
}

export interface GetPrdouctsRes {
  data: IProduct[];
}
