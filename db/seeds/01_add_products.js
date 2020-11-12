/* eslint-disable arrow-body-style */
const BASE_URL = `http://localhost:${process.env.PORT}/images`;

const products = [
  {
    name: 'Churo cupcake',
    price: 30,
    image_url: `${BASE_URL}/churo_cupcake.jpg`,
    description: `The friendship of donuts and cupcakes is cemented in this vanilla 
      bestie topped with a churro and dusted in a healthy coating of cinnamon sugar.`,
  },
  {
    name: 'Cocacola cupcake',
    price: 50,
    image_url: `${BASE_URL}/cocacola_cupcake.jpg`,
    description: `Soda pop adds an unexpected flavor and little bit of fizz to a traditional chocolate cupcake. 
      Some fluffy whipped cream frosting and a cherry on top sweetens the deal.`,
  },
  {
    name: 'Ghost marshmello cupcake',
    price: 20,
    image_url: `${BASE_URL}/ghost_marshmallow_cupcakes.jpg`,
    description: 'A Halloween Day special.',
  },
  {
    name: 'Ice-cream cake',
    price: 320,
    image_url: `${BASE_URL}/ice_cream_cake.jpg`,
    description:
      'Ice cream cake is often a three-layered cake, coated and sandwiched between ice cream.',
  },
  {
    name: 'Lime coconut cupcake',
    price: 45,
    image_url: `${BASE_URL}/Lime_coconut_cupcake.jpg`,
    description: `That catchy song had it all wrong. 
      You mix de lime and de coconut into a mouth-watering cupcake and eat it all up!.`,
  },
  {
    name: 'Red velvet cake',
    price: 280,
    image_url: `${BASE_URL}/red_velvet_cake.jpg`,
    description: `The red velvet cake is a simple sponge cake infused with beet root juice and cocoa powder, 
      but nowadays, food color is used instead of beet root, which gives it its distinct maroon color. 
      The cake is topped with a thick white frosting.`,
  },
  {
    name: 'Torte cake',
    price: 100,
    image_url: `${BASE_URL}/torte_cake.jpg`,
    description: `Tortes are a round, rich, dense cakes that are infused with ground nuts and fruit puree. 
      Unlike cakes, tortes are not layered and are often glazed and topped with fresh fruits and whipped cream.`,
  },
];

exports.seed = (knex) => {
  return knex('products')
    .del()
    .then(() => {
      return knex('products').insert(products);
    });
};
