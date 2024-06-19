import React from 'react';
import './Player.css';


const Player = ({ nom, equipe, nationalite, numero, age, imageUrl }) => { //composant fonctionnel qui utilise la déstructuration pour accéder aux attributs du joueur.
  return (
    <div className="player-card">
      <img src={imageUrl} alt={nom} />
      <div className="player-card-body">
        <h2 className="player-card-title">{nom}</h2>
        <p className="player-card-text"><strong>Équipe:</strong> {equipe}</p>
        <p className="player-card-text"><strong>Nationalité:</strong> {nationalite}</p>
        <p className="player-card-text"><strong>Numéro:</strong> {numero}</p>
        <p className="player-card-text"><strong>Âge:</strong> {age}</p>
      </div>
    </div>
  );
};

Player.defaultProps = {  //définit les valeurs par défaut pour les props du composant.
  nom: 'Nom non disponible',
  equipe: 'Équipe non disponible',
  nationalite: 'Nationalité non disponible',
  numero: 'Numéro non disponible',
  age: 'Âge non disponible',
  imageUrl: 'https://via.placeholder.com/150'
};

export default Player;
