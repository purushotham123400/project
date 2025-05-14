import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductComparison from '@/components/ProductComparison';
import { products } from '@/data/data';
import { Button } from "@/components/ui/button";

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="bg-brand-orange hover:bg-orange-600 text-white">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-gray-600 hover:text-brand-orange text-sm">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link to={`/category/${product.category}`} className="text-gray-600 hover:text-brand-orange text-sm">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-500 text-sm">{product.name}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
          
          <ProductComparison product={product} />
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 3)
                .map(relatedProduct => (
                  <div key={relatedProduct.id} className="border border-gray-200 rounded-lg p-4 hover:border-brand-orange transition-colors">
                    <Link to={`/product/${relatedProduct.id}`} className="block">
                      <div className="flex justify-center mb-3 h-32">
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name} 
                          className="h-full w-auto object-contain" 
                          loading="lazy"
                        />
                      </div>
                      <h3 className="font-medium mb-1">{relatedProduct.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{relatedProduct.description}</p>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
