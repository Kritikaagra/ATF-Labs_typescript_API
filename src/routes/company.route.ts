//ourself api routes

import { Router } from 'express';
import { createCompany, deleteCompany, getAllCompany, getCompany, updateCompany} from '../controllers/company.controller';

const companyRoute = () => {
  const router = Router();

  router.post('/createCompany', createCompany);

  router.get('/getAllCompany', getAllCompany);

  router.get('/getCompany/:id', getCompany);

  router.put('/updateCompany/:id', updateCompany);

  router.delete('/deleteCompany/:id', deleteCompany);

  return router;
};

export { companyRoute };