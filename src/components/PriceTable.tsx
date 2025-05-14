import React, { useState } from 'react';
import { Product } from '../types';
import RetailerIcon from './RetailerIcon';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ExternalLink } from "lucide-react";

interface PriceTableProps {
  product: Product;
}

const PriceTable: React.FC<PriceTableProps> = ({ product }) => {
  const { toast } = useToast();
  const [alertPrice, setAlertPrice] = useState<number | ''>('');
  const [alertEmail, setAlertEmail] = useState('');
  
  const sortedPrices = [...product.prices].sort((a, b) => a.price - b.price);
  const lowestPrice = sortedPrices[0]?.price;
  
  const handleCreateAlert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alertPrice || !alertEmail) {
      toast({
        title: "Missing information",
        description: "Please enter both price and email",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Price Alert Created",
      description: `We'll notify you at ${alertEmail} when the price drops below ₹${Number(alertPrice).toLocaleString()}`,
    });
    
    setAlertPrice('');
    setAlertEmail('');
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retailer</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Availability</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedPrices.map((price) => (
              <tr key={price.retailer} className={price.price === lowestPrice ? "bg-green-50" : ""}>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <RetailerIcon retailerId={price.retailer} size="sm" />
                    <span className="ml-2">{price.retailer.charAt(0).toUpperCase() + price.retailer.slice(1)}</span>
                    {price.price === lowestPrice && (
                      <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Best Price</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-right font-semibold">₹{price.price.toLocaleString()}</td>
                <td className="px-4 py-4 text-center">
                  {price.inStock ? (
                    <span className="text-green-600">In Stock</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </td>
                <td className="px-4 py-4 text-center">
                  <a
                    href={price.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-3 py-1 rounded-md ${price.inStock ? 'bg-brand-orange hover:bg-orange-600 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  >
                    {price.inStock ? (
                      <>
                        Buy Now
                        <ExternalLink className="ml-1" size={14} />
                      </>
                    ) : "Unavailable"}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-3">Set Price Alert</h3>
        <form onSubmit={handleCreateAlert} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="alertPrice" className="block text-sm font-medium text-gray-700 mb-1">Notify me when price drops below</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₹</span>
                <input
                  type="number"
                  id="alertPrice"
                  className="pl-7 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
                  placeholder="Enter price"
                  value={alertPrice}
                  onChange={(e) => setAlertPrice(e.target.value ? Number(e.target.value) : '')}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="alertEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="alertEmail"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
                placeholder="your@email.com"
                value={alertEmail}
                onChange={(e) => setAlertEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <Button 
            type="submit" 
            className="bg-brand-orange hover:bg-orange-600 text-white"
          >
            Create Alert
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PriceTable;
