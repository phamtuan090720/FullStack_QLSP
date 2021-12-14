import React, { useCallback } from 'react'
import { Form, Input, Modal, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../../redux/action/ProductAction';
export default function FormAddProduct({ isOpen, setIsOpen }) {
    const { loading } = useSelector(state => state.addProductReudcer)
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const onSubmit = useCallback((values) => {
        dispatch(addProduct(values, () => {
            setIsOpen(false)
            form.resetFields()
        }));
    }, [dispatch, form, setIsOpen]);
    const closePopup = useCallback(() => {
        setIsOpen(false)
        form.resetFields()
    }, [setIsOpen, form]);
    return (
        <Modal visible={isOpen}
            onCancel={closePopup}
            onOk={form.submit}
            title='Add Product'
            okButtonProps={{ loading: loading }}
        >
            <Form form={form} onFinish={onSubmit} layout='vertical' initialValues={{
                sale: 0
            }}>
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
    )
}
