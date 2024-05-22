const path = require('path');
const express = require('express');

const app = express();
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  const texts = [
    'Logic will get you from A to B. Imagination will take you everywhere.',
    'There are 10 kinds of people. Those who know binary and those who don\'t.',
    'There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.',
    'It\'s not that I\'m so smart, it\'s just that I stay with problems longer.',
    'It is pitch dark. You are likely to be eaten by a grue.'
  ]
  const text = getRandomText(texts);
  res.render('index', { text });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

function getRandomText(textArray) {
  var index = Math.floor(Math.random() * textArray.length);
  return textArray[index];
}