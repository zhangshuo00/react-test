import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import TagInputCom from "./TagInputCom";

const CustomItem: React.FC = () => {

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ name: 'zhangsan', thirdModelUrl: ['macOS'] });
  }, [])

  const onFinish = (values) => {
    console.log('Received values from form: ', values);
  };

  const checkTags = (_, value) => {
    if (value && value.length >= 2) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('请输入至少两个'));
  };

  return (
    <>
      <Form
        name="customized_form_controls"
        layout="inline"
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          label='名字'
          name='name'
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label='标签'
          name='thirdModelUrl'
          rules={[
            {
              validator: checkTags,
              message: '请输入至少两个'
            },
          ]}
        >
          <TagInputCom id='one'/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
      </Form.Item>
      </Form>
    </>
  )
}

export default CustomItem;