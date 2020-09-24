const express = require('express')
const Axios = require('axios')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/users', async function (req, res) {
    try {
        const { test } = await Axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(test)
        res.send(test)
    } catch (error) {
        res.send(error)
    }
})

app.post('/users', async function (req, res) {
    try {
        const {test} = await Axios.post('https://jsonplaceholder.typicode.com/users')
        console.log(test)
        res.send(test)
    } catch (error) {
        res.send(error)
    }
})

app.put('/users/:id', async function (req, res) {
    try {
        const id = req.params.id
        const { test } = await Axios.post('https://jsonplaceholder.typicode.com/users' + id)
        console.log(test)
        res.send(test)
    } catch (error) {
        res.send(error)
    }
})

app.delete('/users/:id', async function (req, res) {
    try {
        const id = req.params.id
        const { test } = await Axios.delete('https://jsonplaceholder.typicode.com/users' + id)
        console.log(test)
        res.send(test)
    } catch (error) {
        res.send(error)
    }
})

app.get('/users/:id/posts', async function (req, res) {
    try {
        const id = req.params.id
        const posts = req.params.id.posts
        const { test } = await Axios.get('https://jsonplaceholder.typicode.com/users' + id + '/' + posts)
        console.log(test)
        res.send(test)
    } catch (error) {
        res.send(error)
    }
})

app.get('/users/:id/albums', async function (req, res) {
    try {
        const id = req.params.id
        const albums = req.params.id.albums
        const { test } = await Axios.get('https://jsonplaceholder.typicode.com/users' + id + '/' + albums)
        console.log(test)
        res.send(test)
    } catch (error) {
        res.send(error)
    }
})






app.listen(8080)