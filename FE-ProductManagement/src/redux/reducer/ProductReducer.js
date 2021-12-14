import * as Type from '../type/ProductType.js';
let initialState = {
    loading: false,
    listProduct: null,
    err: null,
}

const listProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_PRODUCT_LIST_REQUEST: {
            state.loading = true;
            state.err = null;
            state.listProduct = null;
            return { ...state };
        }
        case Type.GET_PRODUCT_LIST_SUCCESS: {
            state.loading = false;
            state.listProduct = action.payload;
            return { ...state };
        }
        case Type.GET_PRODUCT_LIST_FAILED: {
            state.loading = false;
            state.err = action.payload;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
let stateDetailProduct = {
    loading: false,
    product: null,
    err: null
}

const detailProductReudcer = (state = stateDetailProduct, action) => {
    switch (action.type) {
        case Type.GET_PRODUCT_DEAIL_REQUEST: {
            state.loading = true;
            state.err = null;
            state.product = null;
            return { ...state };
        }
        case Type.GET_PRODUCT_DETAIL_SUCCESS: {
            state.loading = false;
            state.err = null;
            state.product = action.payload;
            return { ...state };
        }
        case Type.GET_PRODUCT_DETAIL_FAILED: {
            state.loading = false;
            state.err = action.payload;
            state.product = null;
            return { ...state };
        }
        default:
            return { ...state };
    }
}

let stateDeleteProduct = {
    loading: false,
    data: null,
    err: null
}


const deleteProductReudcer = (state = stateDeleteProduct, action) => {
    switch (action.type) {
        case Type.DELETE_PRODUCT_REQUEST: {
            state.loading = true;
            state.err = null;
            state.data = null;
            return { ...state };
        }
        case Type.DELETE_PRODUCT_SUCCESS: {
            state.loading = false;
            state.err = null;
            state.data = action.payload;
            return { ...state };
        }
        case Type.DELETE_PRODUCT_FAILED: {
            state.loading = false;
            state.err = action.payload;
            state.data = null;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
let stateAddProduct = {
    loading: false,
    data: null,
    err: null
}

const addProductReudcer = (state = stateAddProduct, action) => {
    switch (action.type) {
        case Type.POST_PRODUCT_REQUEST: {
            state.loading = true;
            state.err = null;
            state.data = null;
            return { ...state };
        }
        case Type.POST_PRODUCT_SUCCESS: {
            state.loading = false;
            state.err = null;
            state.data = action.payload;
            return { ...state };
        }
        case Type.PUT_PRODUCT_FAILED: {
            state.loading = false;
            state.err = action.payload;
            state.data = null;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
let stateUpdateProduct = {
    loading: false,
    data: null,
    err: null,
    oldProduct: null
}
const updateProductReducer = (state = stateUpdateProduct, action) => {
    switch (action.type) {
        case Type.PUT_PRODUCT_REQUEST: {
            state.loading = true;
            state.err = null;
            state.data = null;
            return { ...state };
        }
        case Type.PUT_PRODUCT_SUCCESS: {
            state.loading = false;
            state.err = null;
            state.data = action.payload;
            return { ...state };
        }
        case Type.PUT_PRODUCT_FAILED: {
            state.loading = false;
            state.err = action.payload;
            state.data = null;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export {
    listProductReducer,
    deleteProductReudcer,
    addProductReudcer,
    updateProductReducer,
    detailProductReudcer
};