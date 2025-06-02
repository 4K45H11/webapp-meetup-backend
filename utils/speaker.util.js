import mongoose from "mongoose";
// import fs from 'fs'
// import path from 'path'

import Speaker from '../models/speaker.model.js'




//moving the filepath and reading the json file inside 
//the seedData function because 
// const jsonData = fs.readFileSync(filepath, 'utf-8');
// This line executes at import time, which means when the module is loaded, Vercel immediately tries to read speakers.json — but this file doesn’t exist in production.

// export const seedData = async () => {
//     try {
//         const filepath = path.resolve('jsons', 'speakers.json')

//         if (!fs.existsSync(filepath)) {
//             throw new Error(`File not found: ${filepath}`);
//         }

//         const jsonData = fs.readFileSync(filepath, 'utf-8')
//         const speakersData = JSON.parse(jsonData)
//         for (let speaker of speakersData) {
//             const newSpeaker = new Speaker({
//                 name: speaker.name,
//                 specialization: speaker.specialization,
//                 profilePictureUrl: speaker.profilePictureUrl
//             })

//             const savedData = await newSpeaker.save()
//         }

//         console.log('seeded data successfully')
//     }
//     catch (error) {
//         throw 'Error seeding the speakers data!'
//     }
// }




const speakerData = {
    name: 'Alice Smith',
    specialization: 'Writer',
    profilePictureUrl: 'https://placehold.co/100x100?text=Alice+Smith'
}



export const createSpeaker = async () => {
    try {
        const speaker = new Speaker(speakerData);
        const newSpeaker = await speaker.save()

        if (newSpeaker) {
            console.log('Speaker added successfully', newSpeaker)
        }
    }
    catch (error) {
        throw error;
    }
}
