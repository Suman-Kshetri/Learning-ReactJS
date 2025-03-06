import express from 'express'

const app = express();
app.get('/',(req,res) => {
    res.send('Hello World')
})

app.get('/api/products',(req,res) => {
    const product = [
        {
            "id": 1,
            "name": "Laptop",
            "price": 1000,
            "image": "https://cdn.pixabay.com/photo/2017/08/10/03/47/laptop-2617477_1280.jpg"
        },
        {
            "id": 2,
            "name": "Phone",
            "price": 500,
            "image": "https://cdn.pixabay.com/photo/2017/01/15/11/31/smartphone-1987210_1280.jpg"
        },
        {
            "id": 3,
            "name": "Tablet",
            "price": 300,
            "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/ipad-606766_1280.jpg"
        },
        {
            "id": 4,
            "name": "Smartwatch",
            "price": 200,
            "image": "https://cdn.pixabay.com/photo/2014/12/15/13/40/smartwatch-569257_1280.jpg"
        },
        {
            "id": 5,
            "name": "Headphones",
            "price": 150,
            "image": "https://cdn.pixabay.com/photo/2016/11/29/03/53/headphones-1868612_1280.jpg"
        },
        {
            "id": 6,
            "name": "Camera",
            "price": 700,
            "image": "https://cdn.pixabay.com/photo/2018/01/22/09/37/camera-3090264_1280.jpg"
        }
    ]
    // res.send(product)
    // for delay
    setTimeout(() => {
        res.send(product)
    }, 3000)
    // http://localhost:3000/api/products?search=laptop

    if(req.query.search)
    {
        const filterProducts = product.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts)
        return;
    }
    
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})