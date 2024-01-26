import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();
productService.create({
  title: "Product 1",
  price: 100,
  description: "blablabla",
  categoryId: 12,
  images: []
})

const products = productService.getAll();
const prodcutId = products[0].id;

console.log(products);

productService.update(prodcutId, {
  title: "cambiar nombre"
});

const rta = productService.findOne(prodcutId);
console.log(rta);

