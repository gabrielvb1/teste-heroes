import marvel from '../services/external/marvel';
import { Request, Response } from 'express';

export class HeroesController {
  constructor() {
    console.log('LOG');
    
  }
  async getAllHeroes(req: Request, res: Response) {
    try {
      //herois do banco: []
      const allHeroes = (await marvel.getAllHeroes()) as any;

      const result = allHeroes.data.results;

      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ error });
    }
  }

  async getHeroById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const allHeroes = (await marvel.getHeroById(id)) as any;

      const result = allHeroes.data.results;

      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ error });
    }
  }
}

export default new HeroesController();
