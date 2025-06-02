import express from 'express'
import { readAllEvents, readAllEventsByTag, readEventById, readEventsByTitle, readEventsByType } from '../utils/event.util.js'

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const events = await readAllEvents()
        if (events) {
            res.status(200).json(events)
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching events', details: error })
    }
})

router.get('/:eventId',async (req,res)=>{
    try {
        const events = await readEventById(req.params.eventId)
        if (events) {
            res.status(200).json(events)
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching events', details: error })
    }
})

router.get('/type/:isOnline', async (req, res) => {
    try {
        const filterType = (req.params.isOnline.toLocaleLowerCase() === 'online')

        const events = await readEventsByType(filterType)

        if (events) {
            res.status(200).json(events)
        }

    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching events', details: error })
    }
})

router.get('/tag/:tagName',async(req,res)=>{
    try {
        const events = await readAllEventsByTag(req.params.tagName)
        if (events) {
            res.status(200).json(events)
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching events', details: error })
    }
})

router.get('/title/:titleName',async(req,res)=>{
    try {
        const events = await readEventsByTitle(req.params.titleName)
        if (events) {
            res.status(200).json(events)
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching events', details: error })
    }
})

export default router