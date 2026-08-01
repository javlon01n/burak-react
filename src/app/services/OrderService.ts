import axios from "axios";
import { serverApi } from "../../lib/config";

class OrderService {
  [x: string]: any;
  private readonly path: string;
   constructor() {
    this.path = serverApi;
  }
}

export default OrderService