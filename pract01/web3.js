
result = {
  "products": [
    { "id": 1, "name": "Laptop", "category": "Electronics", "price": 1000 },
    { "id": 2, "name": "Book", "category": "Education", "price": 20 },
    { "id": 3, "name": "Phone", "category": "Electronics", "price": 500 },
    { "id": 4, "name": "Pen", "category": "Office", "price": 2 }
  ]
};

// Нужно преобразовать в:
/**
* {
* "Electronics": [
*   { "productName": "Laptop", "price": 1000 },
*    { "productName": "Phone", "price": 500 }
*  ],
*  "Education": [
*    { "productName": "Book", "price": 20 }
*  ],
*  "Office": [
*    { "productName": "Pen", "price": 2 }
*  ]
;* }
**/

function groupByCategory(data) {
  
  if(!data?.products || !Array.isArray(data.products)) {
    throw new Error('Неверный формат данных');
  }
  
  return data.products.reduce((accum, prod) => {
    const {category, name, price} = prod;
    if(!accum[category]) {
      accum[category] = [];
    }
    accum[category].push({
      productName: name,
      price: price
    });
    
    return accum;
  }, {});
  
}

console.log(groupByCategory(result));