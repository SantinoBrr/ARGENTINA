const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Allow all cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'Public')));

// -------------------------------------------- ENDPOINTS --------------------------------------------

/****************************************
 * Business
****************************************/

app.get('/players', async (req, res) => {
  try{
    
    }catch(e){
      res.status(500).send({'error': 'Internal server error'})
    }
})

app.get('/boom', async (req, res) => {
  res.status(500).json({ message: "My bad" })
})

app.get('/players/salary', async (req, res) => {
  res.status(403).send({
    'error': 'Cannot access this information'
  })
})

app.get('/version', async (req, res) => {
    res.status(500).json('La version actual es: 54.243');
})

app.put('/Eduardo', async (req, res) => {
  try{

    res.status(200).send({
      "name": "Eduardo",
      "edad": 110
    
    });
    

  }catch(e){
    res.status(500).send({'error': 'Internal server error'})
  }
})

app.get('/Brawlers', async (req, res) => {
  try{
  res.status(200).sendFile(path.join(__dirname, 'Public', "Brawlers.html"));
}catch(e){
  res.status(500).send({'error': 'Internal server error'})
  }})



  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });