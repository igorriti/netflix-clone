const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

//Create
router.route("/")
    .post(verify, async (req,res)=>{
        if( req.user.isAdmin){
            const newList = new List(req.body);

            try {
                const savedList = await newList.save();
                res.status(201).json(savedList)
        
            } catch (err) {
                res.status(500).json(err)
            }
        }else{
            res.status(403).json("You are not allowed!")
        }

    })
    .get(verify, async(req,res) => {

        const typeQuery = req.query.type;
        const genreQuery = req.query.genre;
        let list = [];

        try {
            if(typeQuery){
                if(genreQuery){
                    list = await List.aggregate([
                        {$sample: { size:20}},
                        {$match:{ type:typeQuery, genre:genreQuery}}
                    ]) 
                } else {
                    list = await List.aggregate([
                        {$sample: { size:20}},
                        {$match:{ type:typeQuery}}
                    ])
                }
            }else{
                list = await List.aggregate([{$sample: {size : 20}}])
            }
            res.status(200).json(list)
            
        } catch (err) {
            res.status(500).json(err)
        }

    })


//Delete list
router.route("/:id")
    .delete(verify, async (req,res)=>{
        if( req.user.isAdmin){
            try {
                await List.findByIdAndDelete(req.params.id);
                res.status(201).json("The list has been delete...")
        
            } catch (err) {
                res.status(500).json(err)
            }
        }else{
            res.status(403).json("You are not allowed!")
        }

    })


//Get List



module.exports = router;