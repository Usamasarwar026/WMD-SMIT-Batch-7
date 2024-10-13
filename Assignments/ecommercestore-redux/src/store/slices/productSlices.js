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
        return { id, data }; 
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
        return { id, data }; 
    }
);

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
                state.filteredProducts = state.products; 
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

            
            .addCase(updateProduct.fulfilled, (state, action) => {
                const { id, data } = action.payload;

              
                const updateProductInArray = (arr) => arr.map(product =>
                    product.id === id ? { ...product, ...data } : product
                );

                state.products = updateProductInArray(state.products);
                state.filteredProducts = updateProductInArray(state.filteredProducts);
            })

          
            .addCase(patchProduct.fulfilled, (state, action) => {
                const { id, data } = action.payload;

              
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
