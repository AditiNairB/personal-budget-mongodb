const express = require("express")
const router = express.Router()

const Budget = require("./models/budget")

router.get("/budget", async (req, res) => {
	const budget = await Budget.find()
	res.send(budget)
})

router.post("/budget", async (req, res) => {
	const budget = new Budget({
		title: req.body.title,
        budget: req.body.budget,
        color: req.body.color,
	})
	await budget.save()
    res.send(budget)
})


module.exports = router