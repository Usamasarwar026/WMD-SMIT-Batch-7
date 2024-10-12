import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch Products
export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    }
);

// Delete Product
export const deleteProductApiAction = createAsyncThunk(
    "product/deleteProduct",
    async (id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return { id, data }; // Return only the id for deletion
    }
);

// Add Product
export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (product) => {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        return data;
    }
);

// Update Product
export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({ id, product }) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        return { id, data }; // Return both id and the updated product
    }
);

// Patch Product
export const patchProduct = createAsyncThunk(
    "product/patchProduct",
    async ({ id, product }) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        return { id, data };
    }
);

const initialState = {
    products: [],  
    filteredProducts: [], 
    loading: false,
    error: null,
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
        },
        filterProducts: (state, action) => {
            const category = action.payload;
            if (category === '') {
                state.filteredProducts = state.products; // Show all products when 'All' is selected
            } else {
                state.filteredProducts = state.products.filter(product => product.category === category);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.filteredProducts = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.products = [action.payload, ...state.products];
                state.filteredProducts = [action.payload, ...state.filteredProducts];
                state.loading = false;
            })
            .addCase(deleteProductApiAction.fulfilled, (state, action) => {
                let id = action.payload.id; 
                state.products = state.products.filter(product => product.id !== id);
                state.filteredProducts = state.filteredProducts.filter(product => product.id !== id);
            })

            // Update Product Case
            .addCase(updateProduct.fulfilled, (state, action) => {
                const { id, data } = action.payload;

                // Find the product in both products and filteredProducts and update it
                const updateProductInArray = (arr) => arr.map(product =>
                    product.id === id ? { ...product, ...data } : product
                );

                state.products = updateProductInArray(state.products);
                state.filteredProducts = updateProductInArray(state.filteredProducts);
            })

            // Patch Product Case
            .addCase(patchProduct.fulfilled, (state, action) => {
                const { id, data } = action.payload;

                // Find the product in both products and filteredProducts and patch it
                const patchProductInArray = (arr) => arr.map(product =>
                    product.id === id ? { ...product, ...data } : product
                );

                state.products = patchProductInArray(state.products);
                state.filteredProducts = patchProductInArray(state.filteredProducts);
            });
    },
});

export const { setProduct, filterProducts } = productSlice.actions;
export default productSlice.reducer;
