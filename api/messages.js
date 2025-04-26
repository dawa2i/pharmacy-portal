module.exports = (req, res) => {
  const messages = [
    { id: 1, sender: 'patient', message: "j'ai une irritation à cause du javel", type: 'text' },
    { id: 2, sender: 'pharmacist', message: "je vous recommande cette crème apaisante", type: 'text' },
    { id: 3, sender: 'pharmacist', message: "./images/creme.jfif", type: 'image' },
    { id: 4, sender: 'pharmacist', message: "disponible dans notre pharmacie Alpha", type: 'text' },
    { id: 5, sender: 'patient', message: "est-ce qu'il y'a un service livraison ?", type: 'text' },
    { id: 6, sender: 'pharmacist', message: "oui biensur", type: 'text' }
  ];

  res.json(messages);
};