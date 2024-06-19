import React from 'react';
import Player from './Player';
import joueurs from './joueurs';
import './Player.css';


const PlayersList = () => { //un composant fonctionnel qui affiche la liste des joueurs.
  return (
    <div className="players-list">
      {joueurs.map((joueur, index) => ( //parcourt le tableau des joueurs et rend un composant Player pour chaque joueur, en utilisant l'opérateur de propagation pour passer les props.
        <Player key={index} {...joueur} />
      ))}
    </div>
  );
};

export default PlayersList;
