const express=  require('express')
const route= express.Router()
const authorisationControllers= require('../controllers/authorisation.controller')
const authenticationControllers= require('../controllers/authentication.controllers')


route.post('/create',authenticationControllers.createUser);
route.post('/login',authorisationControllers.loginUser)
module.exports= route