const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const { body, validationResult } = require('express-validator');
const multer = require("multer");
const path = require('path');

const maxSize = 2 * 1024 * 1024 * 1024;

const uploadFile = multer({
    dest: path.join(__dirname, "../resources/static/assets/profilepicture/"),
    limits: { fileSize: maxSize }
});

router.post('/picture', uploadFile.single('file'), async(req, res) => {
    try {
        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        res.status(200).send({
            message: "File Uploaded successfully: " + req.file.filename,
            result: req.file
        });
    } catch (err) {
        res.status(500).send({
            message: "Could not upload the file: " + req.file + err.message
        });
    }
})

router.get('/data', body("Email").isEmail(), async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    var profile = await Profile.findOne({ Email: req.body.Email })
    if (profile) {
        return res.status(201).json(profile);
    } else {
        return res.status(400).json("Email not exist");
    }
});

router.post('/data', body('Email').isEmail(),
    async(req, res) => {
        console.log(req.body)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        var profile = await Profile.findOne({ Email: req.body.Email })
        if (profile) {
            if (req.body.Username) {
                profile.Username = req.body.Username;
            }
            if (req.body.Email) {
                profile.Email = req.body.Email;
            }
            if (req.body.Password) {
                profile.Password = req.body.Password;
            }
            if (req.body.Phone_Number) {
                profile.Phone_Number = req.body.Phone_Number;
            }
            if (req.body.Username) {
                profile.Username = req.body.Username;
            }
            if (req.body.Date_of_Birth) {
                profile.Date_of_Birth = req.body.Date_of_Birth;
            }
            if (req.body.Time_of_Birth) {
                profile.Time_of_Birth = req.body.Date_of_Birth ? req.body.Date_of_Birth + " " + req.body.Time_of_Birth : profile.Date_of_Birth + " " + req.body.Time_of_Birth;
            }
            if (req.body.Gender) {
                profile.Gender = req.body.Gender;
            }
            if (req.body.Marital_Status) {
                profile.Marital_Status = req.body.Marital_Status;
            }
            if (req.body.Language) {
                profile.Language = req.body.Language;
            }
            if (req.body.Profile_picture) {
                profile.Profile_picture = req.body.Profile_picture;
            }
        } else {
            profile = new Profile({
                Username: req.body.Username,
                Email: req.body.Email,
                Password: req.body.Password,
                Phone_Number: req.body.Phone_Number,
                Date_of_Birth: req.body.Date_of_Birth,
                Time_of_Birth: req.body.Date_of_Birth + " " + req.body.Time_of_Birth,
                Gender: req.body.Gender,
                Marital_Status: req.body.Marital_Status,
                Language: req.body.Language,
                Profile_picture: req.body.Profile_picture
            });
        }
        profile.save();
        return res.send(profile)
    });
module.exports = router;