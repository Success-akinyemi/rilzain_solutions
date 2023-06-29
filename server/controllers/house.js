import House from "../model/House.js"
import { Router } from 'express';

const router = Router();

//Post
router.post('/', async (req, res) => {
    const newHouse = new House(req.body)

    try {
        const savedHouse = await newHouse.save()
        res.status(201).json(savedHouse)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

//GET ALL
router.get('/', async (req, res) => {
    const queryLocation = req.query.location    

    try {
        let getHouse;
        
        if(queryLocation){
            getHouse = await House.find({
                location: {$in: [queryLocation],
            },
        })
        }

        else{
             getHouse = await House.find()
        }

        res.status(201).json(getHouse)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

//GET HOUSE BY ID
router.get('/:id', async (req, res) => {
    try {
        const getHouseById = await House.findById(req.params.id)
        res.status(201).json(getHouseById)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// UPDATE HOUSE
router.put('/:id', async (req, res) => {

    try {
        const updatedHouse = await House.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(201).json(updatedHouse)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

//DELETE HOUSE
router.delete('/:id', async (req, res) => {
    try {
        await House.findByIdAndDelete(req.params.id)
        res.status(200).json('House deleted successfully')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


export default router;