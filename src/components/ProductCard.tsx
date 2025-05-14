import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import RetailerIcon from './RetailerIcon';
import { getBestPrice } from '../data/data';
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const bestPrice = getBestPrice(product.id);
  
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="h-full transition-all hover:shadow-lg border border-gray-200 hover:border-brand-orange">
        <CardHeader className="pb-2">
          <div className="flex justify-between">
            <Badge variant="outline" className="bg-gray-50">
              {product.category}
            </Badge>
            <Badge variant="outline" className="bg-brand-light">
              {product.brand}
            </Badge>
          </div>
          <div className="flex justify-center my-3 h-32">
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-full w-auto object-contain" 
              loading="lazy"
            />
          </div>
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <CardDescription className="line-clamp-2">{product.description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Best Price:</p>
              {bestPrice ? (
                <p className="font-bold text-lg text-brand-orange">
                  ₹{bestPrice.price.toLocaleString()}
                </p>
              ) : (
                <p className="text-gray-500">Out of stock</p>
              )}
            </div>
            
            {bestPrice && (
              <RetailerIcon retailerId={bestPrice.retailer} size="sm" />
            )}
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <div className="w-full text-center">
            <p className="text-sm text-brand-blue">
              Compare prices across {product.prices.length} retailers
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
