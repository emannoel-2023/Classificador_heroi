const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

  async function getHeroName() {
    try {
      const name = await new Promise((resolve, reject) => {
        readline.question('Digite o nome do seu herói: ', (name) => {
          if (!name) {
            reject(new Error('Nome do herói não pode ser vazio'));
            return;
          }
  
          resolve(name);
        });
      });
  
      return name;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
  

  async function getHeroXP(heroName) {
    try {
      const xpString = await new Promise((resolve, reject) => {
        readline.question(`Digite o nível de XP de ${heroName}: `, (xpString) => {
          if (!xpString) {
            reject(new Error('Nível de XP não pode ser vazio'));
            return;
          }
  
          resolve(xpString);
        });
      });
  
      const xp = parseInt(xpString);
  
      if (isNaN(xp)) {
        throw new Error('Nível de XP deve ser um número');
      }
  
      return xp;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
  

  function determineHeroLevel(xp) {
    if (xp < 1000) {
      return 'Ferro';
    } else if (xp < 2000) {
      return 'Bronze';
    } else if (xp < 5000) {
      return 'Prata';
    } else if (xp < 7000) {
      return 'Ouro';
    } else if (xp < 8000) {
      return 'Platina';
    } else if (xp < 9000) {
      return 'Ascendente';
    } else if (xp < 10000) {
      return 'Imortal';
    } else {
      return 'Radiante';
    }
  }

  async function main() {
    try {
      const heroName = await getHeroName();
      if (!heroName) {
        return;
      }
  
      const heroXP = await getHeroXP(heroName);
      if (!heroXP) {
        return;
      }
  
      const heroLevel = determineHeroLevel(heroXP);
  
      console.log(`O herói ${heroName} está no nível ${heroLevel}`);
    } catch (error) {
      console.error(error.message);
    } finally {
      readline.close();
    }
  }
  
  main();
  