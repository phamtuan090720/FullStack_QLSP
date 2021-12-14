import React, { useEffect } from 'react'
import { Layout } from 'antd';
import styles from './ProductManagement.module.css';
import Header from './components/Header/Header';
import ListProduct from './components/ListProduct/ListProduct';
import { getListProduct } from '../../redux/action/ProductAction';
import { useDispatch } from 'react-redux';
export default function ProductManagement() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListProduct())
    }, [dispatch])
    return (
        <Layout style={{ height: '100vh' }}>
            <Header />
            <div className={styles.container}>
                <ListProduct />
            </div>
        </Layout>
    )
}
