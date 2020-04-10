const express = require('express')
const router = express.Router()
const { create, list, read, remove, listBlogsInTag } = require('../controllers/tag')

// Validations
const {runValidation} = require('../validators')
const { tagCreateValidator } = require('../validators/tag')
const {requireSignin, adminMiddleware} = require('../controllers/auth')

router.post('/tag', tagCreateValidator, runValidation, requireSignin, adminMiddleware, create)
router.get('/tags', list)
router.get('/tag/:slug', read)
router.post('/tag/blogs', listBlogsInTag)
router.delete('/tag/:slug', requireSignin, adminMiddleware, remove)

module.exports = router