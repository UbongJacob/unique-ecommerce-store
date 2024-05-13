import { GetPrdouctsRes } from "@/types/api/products.types";
import baseAPi from "./base.api";

export const getProducts = () => baseAPi.get<GetPrdouctsRes>("/products");
