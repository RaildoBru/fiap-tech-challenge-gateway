import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import gatewayRoutes from "./src/routes/gateway.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//  Gateway Route
app.use("/", gatewayRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API Gateway rodando na porta ${PORT}`));
