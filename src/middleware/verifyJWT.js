import jwt from "jsonwebtoken"

export const verifyJWT = async (req, res, next) => {
    const authHeader = req.headers.authorizatin

    if (!authHeader) return res.status(401).json({ message: "Unauthorized" })

    const token = authHeader.split(" ")[1]

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Forbidden" })

        req.user = decoded
        next()
    })
}