import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface ProductCardProps {
  name: string;
  quantity: number;
  price: number;
  onDelete: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, quantity, price, onDelete }) => {
  const total = quantity * price;

  return (
    <Card>
      <CardContent>
        
        <Typography variant="h6">{name}</Typography>
        <Typography>Cantidad: {quantity}</Typography>
        <Typography>Precio: {price}</Typography>
        <Typography>Total: {total}</Typography>
        <Button variant="outlined" color="error" onClick={onDelete}>
          Eliminar
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
