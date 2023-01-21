
import { Router } from 'express';
import { createClient, deleteClient, getAllClients, getClient, updateClient } from '../controllers/client.controller';

const clientRoute = () => {
  const router = Router();

  router.post('/createClient', createClient);

  router.get('/getAllClient', getAllClients);

  router.get('/getClient/:id', getClient);

  router.put('/updateClient/:id', updateClient);

  router.delete('/deleteClient/:id', deleteClient);

  return router;
};

export { clientRoute };