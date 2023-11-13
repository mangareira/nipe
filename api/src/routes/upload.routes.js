import { createUpload, getIdUpload, getUpload, updateUpload, removeUpload } from "../controllers/upload.controller.js";

const uploadRoutes = app => {
    app.post("/uploads", createUpload)
    app.get("/uploads", getUpload)
    app.get("/uploads/:id", getIdUpload)
    app.put("/uploads/:id", updateUpload)
    app.delete("/uploads/:id", removeUpload)
}


export default uploadRoutes 