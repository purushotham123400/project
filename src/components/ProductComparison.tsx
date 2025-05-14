import React, { useState } from 'react';
import { Product } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import PriceTable from './PriceTable';

interface ProductComparisonProps {
  product: Product;
}

const ProductComparison: React.FC<ProductComparisonProps> = ({ product }) => {
  const { toast } = useToast();
  const [showAll, setShowAll] = useState(false);
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Product link copied to clipboard!",
    });
  };
  
  const productFeatures = [
    { name: "Brand", value: product.brand },
    { name: "Category", value: product.category },
    { name: "Product Type", value: product.category.charAt(0).toUpperCase() + product.category.slice(1) },
    // Mock features for demonstration
    { name: "Model Year", value: "2023" },
    { name: "Warranty", value: "1 Year" },
    { name: "Country of Origin", value: "Multiple Origins" },
  ];
  
  const displayFeatures = showAll ? productFeatures : productFeatures.slice(0, 3);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-4 h-48">
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full w-auto object-contain" 
              />
            </div>
            
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            
            <div className="space-y-2 mb-4">
              {displayFeatures.map((feature) => (
                <div key={feature.name} className="flex justify-between text-sm">
                  <span className="font-medium text-gray-600">{feature.name}:</span>
                  <span>{feature.value}</span>
                </div>
              ))}
            </div>
            
            {productFeatures.length > 3 && (
              <Button 
                variant="link" 
                onClick={() => setShowAll(!showAll)} 
                className="p-0 h-auto text-brand-blue"
              >
                {showAll ? "Show Less" : "Show More"}
              </Button>
            )}
            
            <div className="mt-4">
              <Button
                variant="outline"
                className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                onClick={handleShare}
              >
                Share This Product
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="md:col-span-2">
        <PriceTable product={product} />
      </div>
    </div>
  );
};

export default ProductComparison;
