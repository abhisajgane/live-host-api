const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const { company, name, sort, page, limit } = req.query;
    const queryObject = {};
    
    // Filter by company and name
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }; // Case-insensitive search
    }

    let apiData = Product.find(queryObject);

    // Sort functionality
    if (sort) {
        const sortFix = sort.split(',').join(' ');
        apiData = apiData.sort(sortFix);
    } else {
        apiData = apiData.sort('createdAt'); // Default sort by creation date
    }

    // Pagination functionality
    const pageValue = Number(page) || 1; // Default to page 1 if not provided
    const limitValue = Number(limit) || 10; // Default to 10 items per page if not provided
    const skip = (pageValue - 1) * limitValue; // Calculate skip value for pagination

    apiData = apiData.skip(skip).limit(limitValue);

    // Execute the query
    const myData = await apiData;
    
    res.status(200).json({ myData, nbHits: myData.length });
};

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
