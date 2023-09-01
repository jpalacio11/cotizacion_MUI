import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import ProductForm from './components/ProductForm';
import QuotationSummary from './components/QuotationSummary';
import ProductCard from './components/ProductCard';

interface Product {
  name: string;
  quantity: number;
  price: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (name: string, quantity: number, price: number) => {
    const newProduct: Product = { name, quantity, price };
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (index: number) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ProductForm onAddProduct={handleAddProduct} />
        </Grid>
        <Grid item xs={8}>
          <QuotationSummary products={products} />
        </Grid>
        <Grid item xs={12}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              quantity={product.quantity}
              price={product.price}
              onDelete={() => handleDeleteProduct(index)}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
