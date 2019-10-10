import dev from "./configureStoreDev";
import prod from "./configureStoreProd";

let config = prod;
if (process.env.NODE_ENV !== "production") {
  config = dev;
}
export default config;
