import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography, Grid } from '@mui/material';

interface ProductFormProps {
  onAddProduct: (name: string, quantity: number, price: number) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = () => {
    if (!name || isNaN(parseInt(quantity)) || isNaN(parseFloat(price))) {
      return;
    }

    onAddProduct(name, parseInt(quantity), parseFloat(price));

    setName('');
    setQuantity('');
    setPrice('');
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Agregar Producto</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Producto" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              label="Cantidad"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              inputProps={{ min: 0 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              label="Precio por unidad"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              inputProps={{ min: 0 }}
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12} textAlign="right">
            <Button variant="contained" color="primary" onClick={handleAddProduct}>
              Agregar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
