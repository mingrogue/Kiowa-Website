const fs                = require('fs')
var randomstring        = require("randomstring")
var Config              = require('../configs/config')
var Merch               = require('../db/schemas/merch')
var Validator           = require('../validator')

exports.createMerchandise = async function (req, res, name) {
    try {
        var jivaUser = Validator.validate(req.headers.token, req.body, ['title', 'description', 'likes', 'exclusivity', 'hashtag', 'urltobuy', 'Position', 'campaignum'])
        data = req.body
        if(jivaUser.role != 'Merch Team') {
            throw new Error("Permission Denied, you are not from Merch Team!!")
        }
        const path = Config.UploadPath.merch + name.fg
        const path1 = Config.UploadPath.merch + name.bg
        name = []
        var found = await Merch.findOne({title: data.title}) 
        if(!found) {
            var merch = await Merch.create({title: data.title, creator: jivaUser.email, image: path, image1: path1, description: data.description, likes: data.likes, exclusivity: data.exclusivity, hashtag: data.hashtag, urltobuy: data.urltobuy, Position: data.Position, campaignum: data.campaignum}) 
            return {"data": merch, "message": "Merchandise has been succesfully created!!"}
        }
        else {
            try {
                if (fs.existsSync(found.image)){
                    if(fs.existsSync(found.image1)) {
                        fs.unlinkSync(found.image)
                        fs.unlinkSync(found.image1)
                        await Merch.findOneAndUpdate({title: data.title}, {image: path, image1: path1})
                        return {"data": "Merch data already exists", "message": "Merchandise with your given title name has been updated!!"}
                    }
                }
            } catch(err) {
                return {"data": "Merch data already exists", "message": "There was some problem!!"}
            }
        }
    }
    catch(e){
        throw Error('Error in creating merchandise: ' + e)
    }
}

exports.getByCampaignum = async function (params) {
    try {
        var merch = Merch.find({campaignum: params.campainum})
        return merch
    }
    catch(e) {
        throw Error('Error in searching merchandise by campaign number: ' + e)
    }
}