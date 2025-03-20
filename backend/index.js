// backend/index.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Exemple d'API REST
app.get('/api', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API Express!' });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur backend en écoute sur le port ${PORT}`);
});
