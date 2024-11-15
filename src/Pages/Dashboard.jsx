import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
  });

  // Fetch products from the API on component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Open the modal and set initial form data
  const openModal = (product = null) => {
    setEditingProduct(product);
    setFormData(
      product || {
        title: "",
        price: "",
        category: "",
        image: "",
      }
    );
    setIsModalOpen(true);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Add or update product
  const handleSave = (e) => {
    e.preventDefault();
    if (editingProduct) {
      // Update product
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === editingProduct.id ? { ...editingProduct, ...formData } : product
        )
      );
    } else {
      // Create new product
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...formData, id: Date.now() },
      ]);
    }
    setIsModalOpen(false);
  };

  // Delete product
  const handleDelete = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-2xl font-semibold mb-5">Product Management</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-5"
        onClick={() => openModal()}
      >
        Create Product
      </button>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">
                <img src={product.image} alt={product.title} className="w-16 h-16 object-cover" />
              </td>
              <td className="border px-4 py-2">{product.title}</td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded"
                  onClick={() => openModal(product)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal with Form for Create/Update */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">
              {editingProduct ? "Update Product" : "Create Product"}
            </h3>
            <form onSubmit={handleSave}>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">Product Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Product Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border p-2 w-full"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="border p-2 w-full"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">Category</label>
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleChange}
                  className="border p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  value={formData.image}
                  onChange={handleChange}
                  className="border p-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
