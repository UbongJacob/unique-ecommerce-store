export interface ICartItem {
  cart_id: number;
  cart_Item_quantity: number;
  product_id: number;
  name: string;
  vendor: string;
  name_slug: string;
  featured_image: string | null;
  in_stock: number;
  price: number;
  discount_price: number;
  discount: string;
  sku: string;
  isClientModified: boolean;
}
