import React from 'react';
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

export default function OrderCards() {
  const tiers = [
    {
      title: 'Ham-Burger',
      price: '10',
      buttonVariant: 'outlined',
    },
    {
      title: 'Cheese-burger',
      subheader: 'Most popular',
      price: '15',
      buttonVariant: 'contained',
    },
    {
      title: 'Big-Mack',
      price: '30',
      buttonVariant: 'outlined',
    },
  ];
  return (
    <Container maxWidth="md" component="div">
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map(tier => (
          // Enterprise card is full width at sm breakpoint
          <Grid item key={tier.title} xs={12} sm={6} md={4} lg={6}>
            <Card>
              <CardContent>
                <CardMedia
                  component="img"
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h4" color="text.primary">
                    {tier.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    ${tier.price}
                  </Typography>
                </Box>
              </CardContent>
              <CardAction>
                <Button variant="contained" align="center">
                  Add to Cart
                </Button>
              </CardAction>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const CardAction = styled(CardActions)({
  justifyContent: 'flex-end',
});
