import express from 'express';
import { searchAPI } from '../controllers/search';
const router = express.Router();

export default router.post('/search', searchAPI);

// export default (router: express.Router) => {
//   router.post('/search', searchAPI);
// };