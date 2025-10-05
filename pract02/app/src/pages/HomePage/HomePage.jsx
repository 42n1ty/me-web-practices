import { useState } from "react";
import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { ProdCard } from "../../entities/ProductCard/ProdCard";

const hoodies = [
  {id: 1, name: 'Худи с принтом', price: 1199, oldPrice: 1199, image: 'src/assets/01.jpg', category: 'Худи'},
  {id: 2, name: 'Базовое худи', price: 999, image: 'src/assets/02.jpg', category: 'Худи'},
  {id: 3, name: 'Худи оверсайз', price: 1199, image: 'src/assets/03.jpg', category: 'Худи'}
];
const shorts = [
  {id: 4, name: 'Широкие шорты', price: 999, oldPrice: 1199, image: 'src/assets/04.jpg', category: 'Шорты'},
  {id: 5, name: 'Джинсовые шорты', price: 1199, image: 'src/assets/05.jpg', category: 'Шорты'}
];

const allProdcts = [...hoodies, ...shorts];

export const HomePage = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = allProdcts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const groupedProds = filteredProducts.reduce((acc, product) => {
    const category = product.category;
    if(!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    
    return acc;
  }, {});
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header
      searchTerm={searchTerm}
      onSearchChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {Object.entries(groupedProds).map(([category, products]) => (
          <section key={category} className="mb-10">
            <h1 className="text-3xl font-normal mb-6">{category}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8">
              {products.map((product) => (
                <ProdCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </main>
      
      <Footer />
    </div>
  )
}