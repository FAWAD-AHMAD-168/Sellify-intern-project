import Product from "../models/productModel.js";

// ✅ Add a new product (Seller only)
export const createProduct = async (req, res) => {
    try {
        const { name, price, discount, description, image } = req.body;

        const product = await Product.create({
            name,
            price,
            discount,
            description,
            image,
            seller: req.user.id, // comes from the `protect` middleware
        });

        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        console.error("createProduct Error:", error);
        res.status(500).json({ message: "Failed to create product" });
    }
};

// ✅ Get all products (Public route)
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("seller", "fullname email");
        res.status(200).json(products);
    } catch (error) {
        console.error("getAllProducts Error:", error);
        res.status(500).json({ message: "Failed to fetch products" });
    }
};

// ✅ Get product by ID (Product detail)
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("seller", "fullname email");
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error("getProductById Error:", error);
        res.status(500).json({ message: "Failed to fetch product" });
    }
};

// ✅ Update product (Only seller who owns it)
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product || product.seller.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to update this product" });
        }

        const { name, price, discount, description, image } = req.body;

        product.name = name || product.name;
        product.price = price || product.price;
        product.discount = discount || product.discount;
        product.description = description || product.description;
        product.image = image || product.image;

        await product.save();

        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        console.error("updateProduct Error:", error);
        res.status(500).json({ message: "Failed to update product" });
    }
};

// ✅ Delete product (Only seller who owns it)
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product || product.seller.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to delete this product" });
        }
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("deleteProduct Error:", error);
        res.status(500).json({ message: "Failed to delete product" });
    }
};
