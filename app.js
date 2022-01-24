const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.get("/", async (req, res) => {

    console.log("============")
    for (const [key,value] of Object.entries(process.memoryUsage())){
        console.log(`Memory usage by ${key}, ${value/1000000}MB `)
    }
    console.log("============")

    const contacts = await prisma.contact.findMany()
    res.send(`contacts = ${contacts.length}`)
});

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}!`)
});
