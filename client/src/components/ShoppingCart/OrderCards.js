import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export default function OrderCards({ ordersInCart }) {
  // const tiers = [
  //   {
  //     title: 'Ham-Burger',
  //     price: '10',
  //     buttonVariant: 'outlined',
  //   },
  //   {
  //     title: 'Cheese-burger',
  //     subheader: 'Most popular',
  //     price: '15',
  //     buttonVariant: 'contained',
  //   },
  //   {
  //     title: 'Big-Mack',
  //     price: '30',
  //     buttonVariant: 'outlined',
  //   },
  // ];
  return (
    <Container maxWidth="lg" component="div">
      <ProductCardsContainer container spacing={5} alignItems="center">
        {ordersInCart.map(order => (
          // Enterprise card is full width at sm breakpoint
          <ProductCardContainer
            item
            key={order._id}
            xs={12}
            sm={6}
            md={4}
            lg={6}
          >
            <ProductCard>
              <ProductCardContent>
                <ProductImage component="img" image={order.img} alt="random" />
                <ProductCardTextContainer
                  sx={{
                    mb: 2,
                  }}
                >
                  <ProductCardTextWrapper>
                    <Typography
                      component="h2"
                      variant="h4"
                      color="text.primary"
                    >
                      {order.title}
                    </Typography>
                    <Typography
                      component="h2"
                      variant="h6"
                      color="text.secondary"
                    >
                      ${order.price}
                    </Typography>
                  </ProductCardTextWrapper>
                  <CardQuontityInput
                    id="contact phone number"
                    // label="Contact phone number"
                    type="number"
                    // value={this.state.contactPhoneNumber}
                    // onChange={this.handleChange('contactPhoneNumber')}
                    // placeholder="Contact phone number"
                    margin="normal"
                  />
                </ProductCardTextContainer>
              </ProductCardContent>
            </ProductCard>
          </ProductCardContainer>
        ))}
      </ProductCardsContainer>
      <CardAction>
        <Button variant="contained" align="center">
          Submit
        </Button>
      </CardAction>
    </Container>
  );
}

const ProductCardsContainer = styled(Grid)({
  flexDirection: 'column',
  flexWrap: 'nowrap',
  maxWidth: '55vw',
  maxHeight: '424px',
  overflowY: 'scroll',
  marginTop: '0 !important',
  marginLeft: '0 !important',
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

const ProductCardContainer = styled(Grid)({
  width: '100% !important',
  maxWidth: '100% !important',
  paddingTop: '20px !important',
  paddingRight: '20px',
  paddingBottom: '20px',
  paddingLeft: '20px !important',
  backgroundColor: '#fff',
  '&:not(:last-child)': {
    paddingBottom: '20px',
  },
});

const ProductCard = styled(Card)({
  width: '100%',
});

const ProductCardContent = styled(CardContent)({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
});

const ProductImage = styled(CardMedia)({
  display: 'inline-block',
  maxWidth: '500px',
});

const ProductCardTextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginBottom: '0 !important',
});

const ProductCardTextWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '30px',
});

const CardQuontityInput = styled(TextField)({
  margin: 0,
});

const CardAction = styled(CardActions)({
  justifyContent: 'flex-end',
});
