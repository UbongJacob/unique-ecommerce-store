import { create } from "apisauce";

export const baseAPi = create({
  baseURL:
    "https://getpantry.cloud/apiv1/pantry/2f1ead9b-69f8-4cef-9dab-c406d37f7408/basket",
  headers: {
    "Content-type": "application/json",
    "Request-Channel": "web",
    crossOriginIsolated: true,
  },
});
export default baseAPi;
