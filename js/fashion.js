const express = require('express');
const app = express();

// Fake JSON data
const fakeData = [
  { image: 'https://via.placeholder.com/150', title: 'Item 1' },
  { image: 'https://via.placeholder.com/150', title: 'Item 2' },
  { image: 'https://via.placeholder.com/150', title: 'Item 3' }
];

app.get('/', (req, res) => {
  // Format the fake data and include it in an HTML page
  let html = '<ul>';
  fakeData.forEach(item => {
    html += `<li><img src="${item.image}" alt="${item.title}">${item.title}</li>`;
  });
  html += '</ul>';

  res.send(html); // Send the HTML page as response
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
