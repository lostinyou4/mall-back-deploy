import Product from "../models/product_schema.js"

const main = (req, res) => {
    res.set({'Content-Type' : 'text/html; chartset=utf-8'});
    res.send('<h1>Welcome, 제발 돼라</h1>')
}

const test = async () => {
    const products = await Product.find()
    console.log(products)
    res.json(products)
}

export { main, test }