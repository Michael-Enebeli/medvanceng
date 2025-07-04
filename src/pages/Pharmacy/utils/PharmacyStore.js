export async function getProducts() {
  return [
    { id: 1, name: "Panadol Extra (500mg)", quantity: 6, price: 6700, image: "/images/drug1.jpg" },
    { id: 2, name: "Augmentin 625mg", quantity: 4, price: 9500, image: "/images/drug2.png" },
    { id: 3, name: "Amoxicillin 500mg", quantity: 10, price: 4200, image: "/images/drug3.jpg" },
    { id: 4, name: "Vitamin C (1000mg)", quantity: 20, price: 2300, image: "/images/drug1.jpg" },
    { id: 5, name: "Ibuprofen 400mg", quantity: 8, price: 3100, image: "/images/drug2.png" },
    { id: 6, name: "Loratadine", quantity: 5, price: 4800, image: "/images/drug3.jpg" },
    { id: 7, name: "Cough Syrup", quantity: 12, price: 3900, image: "/images/drug1.jpg" },
    { id: 8, name: "Flagyl", quantity: 9, price: 2700, image: "/images/drug2.png" },
    { id: 9, name: "Blood Tonic", quantity: 3, price: 8200, image: "/images/drug3.jpg" }
  ];
}