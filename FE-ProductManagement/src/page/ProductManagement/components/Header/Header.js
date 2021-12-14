import { Button, PageHeader } from 'antd'
import React from 'react'
import styles from './Header.module.css';
import { PlusOutlined } from '@ant-design/icons';
import FormAddProduct from '../FormAddProduct/FormAddProduct';
export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <PageHeader
                className={styles.header}
                title="Product management"
                extra={[
                    <Button key="1" shape='round' type="primary" onClick={() => setIsOpen(true)}>
                        <PlusOutlined /> Add Product
                    </Button>,
                ]}
            />
            <FormAddProduct isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}
