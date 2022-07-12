import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export default function OrderCards({
  ordersInCart,
  setOrdersInCart,
  deleteOrder,
}) {
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
                <DeleteOrderButton
                  aria-label="delete"
                  onClick={() => deleteOrder(order)}
                >
                  <ClearIcon />
                </DeleteOrderButton>
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
                    id="ordered product quontyty"
                    type="number"
                    value={order.quontity}
                    onChange={e =>
                      setOrdersInCart({
                        ...order,
                        quontity: e.target.value,
                      })
                    }
                    margin="normal"
                  />
                </ProductCardTextContainer>
              </ProductCardContent>
            </ProductCard>
          </ProductCardContainer>
        ))}
      </ProductCardsContainer>
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
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
});

const DeleteOrderButton = styled(IconButton)({
  position: 'absolute',
  top: 0,
  left: '95%',
  '& > svg': {
    fill: '#000',
  },
  '& > svg:hover': {
    fill: '#1976d2',
  },
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
