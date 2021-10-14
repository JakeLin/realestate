const minutes = Math.floor(Math.random() * 1000);
const kilometers = Math.floor(Math.random() * 1000) / 10;

const data = {
  time: minutes + 'mins',
  distance: kilometers + 'km'
};

export default data;