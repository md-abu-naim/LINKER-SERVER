import multer from "multer" 


const storage = multer.memoryStorage()

const uploadMedia = multer({
    storage,
    limits:{
        fileSize: 50 * 102 * 1024
    }
})

export default uploadMedia;