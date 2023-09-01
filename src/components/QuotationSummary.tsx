import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface QuotationSummaryProps {
  products: { name: string; quantity: number; price: number }[];
}

const QuotationSummary: React.FC<QuotationSummaryProps> = ({ products }) => {
  const total = products.reduce((acc, product) => acc + product.quantity * product.price, 0);

  return (
    <Card >
      <CardContent>
        <Typography variant="h6">Resumen de cotización</Typography>
        {products.map((product, index) => (
          <Typography key={index}>
            {product.name} - Cantidad: {product.quantity} - Precio: {product.price} - Total: {product.quantity * product.price}
          </Typography>
        ))}
        <Typography variant="h6">Total: {total}</Typography>
      </CardContent>
    </Card>
  );
};

export default QuotationSummary;
