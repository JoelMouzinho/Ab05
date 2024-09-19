let products = [
    { productId: 1, name: 'Laptop', cost: 999 },
    { productId: 2, name: 'Smartphone', cost: 599 },
    { productId: 3, name: 'Headphones', cost: 199 }
];

function getProductById(id) {
    const product = products.find(p => p.productId === id);
    return product || null;
}

function addProduct(name, cost) {
    const maxId = Math.max(...products.map(p => p.productId));
    const newProduct = { productId: maxId + 1, name, cost };
    products.push(newProduct);
}

function listProducts() {
    products.forEach(product => {
        console.log(`${product.name} costs ${product.cost}€`);
    });
}

let selectedProduct = getProductById(2);
console.log(selectedProduct);

addProduct("Tablet", 399);
listProducts();
