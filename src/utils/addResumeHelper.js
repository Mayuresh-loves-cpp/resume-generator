const resume = require("../models/resumeInfoSchema")

module.exports = {
    addInfo: async (data) => {
        const result = await resume.create(data)
        return result
    },
}