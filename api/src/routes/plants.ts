import {Router, Request, Response, NextFunction } from "express";

const router: Router = Router();

router.get("/api/plants/", (req:Request, res:Response, next:NextFunction) => {
    res.send("TEST");
});

export default router;
