const ruleCard = (card) => {
    for(let i=2;i<7;i++){
      if(card.value==i){
        if(card.suit==='CLUBS'||card.suit=='SPADE'){
          return `Vous distribuez ${i} gorgées.`
        } else {
          return `Vous buvez ${i} gorgées.`
        }
      }
    }
    if(card.value==='7'){
      return `Dans ma valise j'ai... A tour de rôle, les joueurs doivent énoncer un objet qu'ils ont dans leur valise tout en rappelant les objets précédemment cités. Le jeu s'arrête lorsqu'un jour se trompe`
    }
      if(card.value==='8'){
      return `Choisis un thême. Chaque joueur donne un mot dans le thême choisis jusqu'à ce qu'un joueur n'en ai plus ou qu'un mot soit répété 2 fois.`
    }
      if(card.value==='9'){
      return `Vous devez vous tenir sur une jambe jusqu'à votre prochain tour ou qu'un autre joueur tire un 9`
    }
      if(card.value==='10'){
      return `Je n'ai jamais.. Vous devez énoncer une chose que vous n'avez jamais faite. Les joueurs qui l'ont déjà fait doivent boire.`
    }
      if(card.value==='JACK'){
      return `Tu deviens le maitre des pouces. Dès que tu poses le doigt sur la table, tous les joueurs doivent t'imiter. Le dernier à poser son pouce doit boire une gorgée. Vous perdez votre titre lorsqu'un autre valet est tiré.`
    }
      if(card.value==='QUEEN'){
      return `Choisissez un joueur. Lorsque vous buvez, le joueur que vous avez choisi doit boire aussi`
    }
      if(card.value==='KING'){
      return `Roi des questions. Si quelqu'un vous répond lorsque vous posez une question, cette personne doit boire. Vous perdez votre titre lorsqu'un autre roi est tiré.`
    }
      if(card.value==='ACE'){
      return `Crée une nouvelle règle. Elle sera active jusqu'à la fin du jeu.`
    }
  }

  export default ruleCard;