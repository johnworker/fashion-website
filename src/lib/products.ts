export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
  }
  
  export const products: Product[] = [
    { id: '001', name: '優雅連身裙', price: 2980, image: '/images/001.jpg' },
    // …其他商品
  ];
  