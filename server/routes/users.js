const express = require('express')
const router = express.Router();
export {login,signup} from "../controllers/auth.js"
// complete request from index.js and solve it here
router.post('/signup',signup)
router.post('/login',login)
export default router
