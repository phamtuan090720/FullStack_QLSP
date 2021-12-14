import * as Type from '../type/ProductType.js';
import { http } from '../../api/http.js';
import { Modal } from 'antd';

const notification = (type, mess, action) => {
    return Modal[type]({
        content: mess,
        onOk() {
            if (action) {
                return action()
            }
        },
        onCancel() {

        },
    })
}

export const getListProduct = () => {
    return (dispatch) => {
        dispatch(getListProductRequest())
        setTimeout(() => {
            http.get('/').then((rs) => {
                console.log(rs.data)
                dispatch(getListProductSuccess(rs.data))
            }).catch((err) => {
                dispatch(getListProductFailed(err.response))
            })
        }, 800);
    }
}
const getListProductRequest = () => {
    return {
        type: Type.GET_PRODUCT_LIST_REQUEST
    }
}
const getListProductSuccess = (data) => {
    return {
        type: Type.GET_PRODUCT_LIST_SUCCESS,
        payload: data
    }
}
const getListProductFailed = (err) => {
    return {
        type: Type.GET_PRODUCT_LIST_FAILED,
        payload: err
    }
}

export const getDetailProduct = (id) => {
    return (dispatch) => {
        dispatch(getDetailProductRequest())
        http.get(`/${id}`).then((rs) => {
            console.log(rs)
            dispatch(getDetailProductSuccess(rs.data))
        }).catch((err) => {
            dispatch(getDetailProductFailed(err.response));
        })
    }
}
const getDetailProductRequest = () => {
    return {
        type: Type.GET_PRODUCT_DEAIL_REQUEST
    }
}
const getDetailProductSuccess = (data) => {
    return {
        type: Type.GET_PRODUCT_DETAIL_SUCCESS,
        payload: data
    }
}
const getDetailProductFailed = (err) => {
    return {
        type: Type.GET_PRODUCT_DETAIL_FAILED,
        payload: err
    }
}
export const addProduct = (prodcut, closeForm) => {
    return (dispatch) => {
        dispatch(addProductRequest())
        setTimeout(() => {
            http.post('/', prodcut).then((rs) => {
                notification("success", "Add Product Successfully", () => {
                    dispatch(getListProduct());
                })
                dispatch(addProductSuccess(rs.data))
                if (closeForm) {
                    closeForm();
                }
            }).catch((err) => {
                dispatch(addProductFailed(err.response))
            })
        }, 800);
    }
}

const addProductRequest = () => {
    return {
        type: Type.POST_PRODUCT_REQUEST
    }
}
const addProductSuccess = (data) => {
    return {
        type: Type.POST_PRODUCT_SUCCESS,
        payload: data
    }
}
const addProductFailed = (err) => {
    return {
        type: Type.POST_PRODUCT_FAILED,
        payload: err
    }

}
export const updateProduct = (id, data, closeForm) => {
    return (dispatch) => {
        dispatch(updateProductRequest())
        setTimeout(() => {
            http.put(`/${id}`, data).then((rs) => {
                notification("success", "Update Successfully", () => {
                    dispatch(getListProduct());
                })
                dispatch(updateProductSuccess(rs.data))
                if (closeForm) {
                    closeForm();
                }
            }).catch((err) => {
                dispatch(updateProductFailed(err.response));
                notification("error", "Update Failed")
            })
        }, 800);

    }
}
const updateProductRequest = () => {
    return {
        type: Type.PUT_PRODUCT_REQUEST
    }
}
const updateProductSuccess = (data) => {
    return {
        type: Type.PUT_PRODUCT_SUCCESS,
        payload: data
    }
}
const updateProductFailed = (err) => {
    return {
        type: Type.PUT_PRODUCT_FAILED,
        payload: err
    }
}
export const deleteProduct = (id) => {
    return (dispatch) => {
        dispatch(deleteProductRequest())
        http.delete(`/${id}/`).then((rs) => {
            dispatch(deleteProductSuccess(rs.data));
            notification("success", "Delete Successfully", () => {
                dispatch(getListProduct());
            })
        }).catch((err) => {
            dispatch(deleteProductFailed(err.response));
            notification("error", "Delete Failed")
        })
    }

}
const deleteProductRequest = () => {
    return {
        type: Type.DELETE_PRODUCT_REQUEST
    }
}
const deleteProductSuccess = (data) => {
    return {
        type: Type.DELETE_PRODUCT_SUCCESS,
        payload: data
    }
}
const deleteProductFailed = (err) => {
    return {
        type: Type.DELETE_PRODUCT_FAILED,
        payload: err
    }
}
