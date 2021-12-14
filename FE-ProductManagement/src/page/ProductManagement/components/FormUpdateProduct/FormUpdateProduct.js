import { Modal, Form, Input, InputNumber } from 'antd';
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../../../redux/action/ProductAction';

export default function FormUpdateProduct({ setIsOpen, isOpen }) {
    const { product } = useSelector(state => state.detailProductReudcer);
    const { loading } = useSelector(state => state.updateProductReducer);
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    React.useEffect(() => {
        if (product) {
            form.setFieldsValue({
                name: product?.name,
                amount: product?.amount,
                price: product?.price,
                sale: product?.sale
            })
        }
    }, [form, product])
    const onSubmit = useCallback((values) => {
        dispatch(updateProduct(product.id, values, () => {
            setIsOpen(false)
            form.resetFields()
        }))
    }, [product, dispatch, form, setIsOpen]);
    const closePopup = useCallback(() => {
        setIsOpen(false)
        form.resetFields()
    }, [setIsOpen, form]);
    const renderProduct = useCallback(() => {
        return <Modal visible={isOpen}
            onCancel={closePopup}
            okText="Update"
            onOk={form.submit}
            title='Update Product'
            okButtonProps={{ loading: loading }}
        >
            <Form form={form} onFinish={onSubmit} layout='vertical'>
                <Form.Item style={{ width: 250 }} label='Name' name='name' rules={[{
                    required: true, message: "Vui Lòng Nhập Tên"
                }]}>
                    <Input></Input>
                </Form.Item>
                <Form.Item style={{ width: 400 }} label='Amount' name='amount' rules={[{
                    required: true, message: "Vui Lòng Nhập Số Lượng"
                }]}>
                    <InputNumber min={0}></InputNumber>
                </Form.Item>
                <Form.Item style={{ width: 400 }} label='Price' name='price' rules={[{
                    required: true, message: "Vui Lòng Nhập Giá"
                }]}>
                    <InputNumber min={0}></InputNumber>
                </Form.Item>
                <Form.Item style={{ width: 400 }} label='Sale' name='sale' rules={[{
                    required: true, message: "Giảm giá không được bỏ trống"
                }]}>
                    <InputNumber min={0} max={100}></InputNumber>
                </Form.Item>
            </Form>
        </Modal>
    }, [closePopup, isOpen, onSubmit, form, loading])
    return (
        renderProduct()
    )
}
