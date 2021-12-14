import { Button, Modal, Space, Table, Typography } from 'antd'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getDetailProduct } from '../../../../redux/action/ProductAction';
import FormUpdateProduct from '../FormUpdateProduct/FormUpdateProduct';
import styles from './ListProduct.module.css';
const { Text } = Typography
export default function ListProduct() {
    const { loading, listProduct } = useSelector(state => state.listProductReducer)
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = React.useState(false);
    const modalComfimDelete = (id) => {
        return Modal.confirm({
            content: "Confirm delete ?",
            okText: "Confim",
            onOk() {
                dispatch(deleteProduct(id));
            },
            onCancel() {
            },
        })
    }
    const openFormUpdate = (id) => {
        setIsOpen(true);
        dispatch(getDetailProduct(id))
    }
    const formatData = () => {
        if (listProduct) {
            return listProduct.map((item, index) => {
                return { ...item, key: index + 1 }
            })
        }
        return []
    }

    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            width: "20px"
        },
        {
            title: 'Name',
            dataIndex: 'name',
            align: "left",
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            align: "left",
            key: 'price',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            align: "left",
            key: 'amount',
        },
        {
            title: 'Sale',
            dataIndex: 'sale',
            align: "left",
            key: 'sale',
        },
        {
            title: 'Action',
            key: 'Action',
            align: "center",
            width: "100px",
            render: (text, record) => {
                return (
                    <Space size="middle">
                        <Button type='link' className={styles.button} onClick={() => openFormUpdate(record.id)} ><Text type='warning' strong>Edit</Text> </Button>
                        <Button type='link' className={styles.button} onClick={() => modalComfimDelete(record.id)}><Text type='danger' strong>Delete</Text> </Button>
                    </Space>
                )
            }
        },
    ];

    return (
        <>
            <Table dataSource={formatData()}
                columns={columns}
                loading={loading}
            />
            <FormUpdateProduct isOpen={isOpen} setIsOpen={setIsOpen} />
        </>

    )
}
