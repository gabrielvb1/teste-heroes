import axios from 'axios';
import authParams from '../../../chaves-api';

class MarvelHeroes {
  async getAllHeroes() {
    try {
      const { data } = await axios.get(
        `https://gateway.marvel.com/v1/public/characters`,
        
        {
          params: authParams,
        }
      );
      return data;
    } catch (error) {
        console.log(error);
        throw new Error('Erro ao listar heróis');
    }
  }

  async getHeroById(heroeId: string) {
    try {
      const { data } = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${heroeId}`,
        
        {
          params: authParams,
        }
      );
      return data;
    } catch (error) {
        console.log(error);
        throw new Error('Erro ao listar heróis');
    }
  }
}

export default new MarvelHeroes();
