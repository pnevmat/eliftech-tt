const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;

const shopSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set name for shop'],
    },
  },
  { versionKey: false, timestamps: true },
);

shopSchema.plugin(mongoosePaginate);

const Shop = mongoose.model('shops', shopSchema);

module.exports = Shop;

// const fastfoodsData = [
// 	{
// 		title: 'Donalds',
// 		products: [
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'Ham-Burger',
// 				price: '10',
// 			},
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'Cheese-burger',
// 				price: '15',
// 			},
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'Big-Mack',
// 				price: '30',
// 			},
// 		],
// 	},
// 	{
// 		title: 'FCK',
// 		products: [
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'FCurger',
// 				price: '5',
// 			},
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'Cheese-FCurger',
// 				price: '15',
// 			},
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'FCK-Naggets',
// 				price: '30',
// 			},
// 		],
// 	},
// 	{
// 		title: 'FoxiFF',
// 		products: [
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'FoxiFF-Burger',
// 				price: '20',
// 			},
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'FoxiFF-Nuggets',
// 				price: '25',
// 			},
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'FoxiFF-Cola',
// 				price: '7',
// 			},
// 		],
// 	},
// 	{
// 		title: 'HataPuz',
// 		products: [
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'HataPuz-Borshch',
// 				price: '20',
// 			},
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'HataPuz-Kotleti',
// 				price: '25',
// 			},
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'HataPuz-Stake',
// 				price: '35',
// 			},
// 		],
// 	},
// 	{
// 		title: 'Pelmeni',
// 		products: [
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'Ti-za-pelmen-zaplatil',
// 				price: '5',
// 			},
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'Okroshka',
// 				subheader: 'Most popular',
// 				price: '7',
// 			},
// 			{
// 				img: 'https://source.unsplash.com/random',
// 				title: 'Pirojok',
// 				price: '8',
// 			},
// 		],
// 	},
// ];
