import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export default function ProductCards({
  chosenShop,
  products,
  ordersInCart,
  setOrdersInCart,
}) {
  const [chosenProducts, setChosenProducts] = useState([]);

  useEffect(() => {
    if (chosenShop) {
      const filteredProducts = products.filter(product => {
        return product.shop === chosenShop;
      });
      setChosenProducts(filteredProducts);
    }

    if (!chosenShop && products && chosenProducts.length === 0) {
      setChosenProducts(products);
    }
  }, [chosenShop, products, chosenProducts.length]);
  return (
    <ProductCardsContainer maxWidth="lg" component="div">
      <Grid container spacing={5} alignItems="flex-end">
        {chosenProducts.map(product => (
          // Enterprise card is full width at sm breakpoint
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={6}>
            <Card>
              <CardContent>
                <CardMedia component="img" image={product.img} alt="random" />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h4" color="text.primary">
                    {product.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    ${product.price}
                  </Typography>
                </Box>
              </CardContent>
              <CardAction>
                <Button
                  variant="contained"
                  align="center"
                  onClick={() => setOrdersInCart([...ordersInCart, product])}
                >
                  Add to Cart
                </Button>
              </CardAction>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ProductCardsContainer>
  );
}

const ProductCardsContainer = styled(Container)({
  maxHeight: '900px',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: '15px',
    color: '#000',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: '10px',
    backgroundColor: '#cbc3c3de',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '10px',
    backgroundColor: 'rgba(2,2,2,0.65)',
  },
});

const CardAction = styled(CardActions)({
  justifyContent: 'flex-end',
});
