import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (_, res: Response) => {
  try {
    res.status(200).render("index");
  } catch (error) {
    res.status(500).render("SOME ERROR OCCURED, SORRY!");
  }
});

router.get("/home", (_, res: Response) => {
  try {
    res.redirect("/");
  } catch (error) {
    res.status(500).render("SOME ERROR OCCURED, SORRY!");
  }
});

router.use((_, res: Response) => {
  res.status(404).render("404");
});

export default router;
