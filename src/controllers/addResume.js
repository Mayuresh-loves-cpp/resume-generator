const resumeSchema = require("../models/resumeInfoSchema")
const {
    addInfo
} = require("../utils/addResumeHelper")
const helper = require("../utils/addResumeHelper")

module.exports = {
    addResume: async (req, res, next) => {
        try {
            console.log(req.body)
            if (req.body) {
                const result = await addInfo(req.body)
                if (result) {
                    res.status(200).json({
                        success: true,
                        resumeID: result._id,
                    })
                } else {
                    res.status(400).json({
                        success: false,
                        resumeID: null,
                    })
                }
            } else {
                res.status(400).json({
                    success: false,
                    resumeID: null,
                })
            }

        } catch (error) {
            console.log(error)
        }
    },
}