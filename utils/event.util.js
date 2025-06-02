// import fs from 'fs'
// import path from 'path'
import Speaker from '../models/speaker.model.js'
//had to import Speaker otherwise giving error
//as I have used Speaker model to populate data in 
//event.
import Event from '../models/event.model.js'




// export const seedEvents = async () => {
//     try {
//         const filePath = path.resolve('jsons', 'events.json')

//         const jsonData = fs.readFileSync(filePath)
//         const eventsData = JSON.parse(jsonData)

//         for (let event of eventsData) {
//             const newEvent = new Event({
//                 title: event.title,
//                 host: event.host,
//                 details: event.details,
//                 addInfo: event.addInfo,
//                 tag: event.tag,
//                 startDate: event.startDate,
//                 endDate: event.endDate,
//                 startTime: event.startTime,
//                 endTime: event.endTime,
//                 location: event.location,
//                 price: event.price,
//                 isOnline: event.isOnline,
//                 speakers: event.speakers
//             })

//             const savedEvent = await newEvent.save()
//         }

//     } catch (error) {
//         throw error
//     }
// }

export const readAllEvents = async () => {
    try {
        const allEvents = await Event.find().populate('speakers')
        return allEvents
    } catch (error) {
        throw error
    }
}

export const readEventById = async (eventId) => {
    try {
        const event = await Event.findById(eventId).populate('speakers')
        if (event) return event;
    } catch (error) {
        throw error;
    }
}

export const readAllEventsByTag = async (tagName) => {
    try {
        const events = await Event.find({ tag: tagName })
        return events
    } catch (error) {
        throw error;
    }
}

export const readEventsByType = async (isOnline) => {
    try {
        const events = await Event.find({ isOnline: isOnline })
        return events
    } catch (error) {
        throw error;
    }
}

export const readEventsByTitle = async (eventTitle) => {
    try {
        const events = await Event.findOne({ title: eventTitle })
        return events
    } catch (error) {
        throw error
    }
}