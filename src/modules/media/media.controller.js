import cloudinary from "../../config/cloudinary.js"

export const uploadMedia = async (req, res) => {
    const file = req.file

    const streamUpload = () =>
        new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    resource_type: 'auto',
                    folder: "linker/posts"
                },
                (error, result) => {
                    if (result) resolve(result)
                    else reject(error)
                }
            )

            streamifier.createReadStream(file.buffer).pipe(stream)
        })

    const result = await streamUpload()

    res.json({
        url: result.secure_url,
        type: result.resource_type
    })
}



// import streamifier from "streamifier"
// export const uploadMedia = async (req, res) => {
//     try {
//         const file = req.file
//         const streamUpload = () =>
//             new Promise((resolve, reject) => {
//                 const stream = cloudinary.uploader.upload_stream(
//                     {
//                         resource_type: "auto",
//                         folder: "linker/posts"
//                     },
//                     (error, result) => {
//                         if (result) resolve(result)
//                         else reject(error)

//                     }
//                 )

//                 streamifier.createReadStream(file.buffer).pipe(stream)

//             })

//         const result = await streamUpload()

//         res.json({
//             url: result.secure_url,
//             type: result.resource_type
//         })

//     } catch (error) {

//         res.status(500).json({ error: error.message })

//     }

// }