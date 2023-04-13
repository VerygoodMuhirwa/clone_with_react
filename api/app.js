const express= require('express')
const swaggerUi= require('swagger-ui-express')
const swaggerDocument= require("./swagger.json")
const config= require('config')
const cors= require('cors')

const app = express()
app.use(cors())

if (!config.get("jwtPrivateKey")) {
    console.log('JWT PRIVATE KEY IS NOT DEFINED')
    process.exit(1)
}

app.use(express.json())
const Admin= require("./middleware/admin")
const authController= require("./middleware/auth")
const userControllers= require("../api/controllers/userControllers")

app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/v1/api',userControllers)
app.listen(3000,()=>console.log('Server running on port 3000'))