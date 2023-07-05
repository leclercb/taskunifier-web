export function getDefaultFormItemLayout() {
    return {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
            xl: { span: 6 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
            xl: { span: 14 }
        }
    };
}

export function getDefaultTailFormItemLayout() {
    return {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0
            },
            sm: {
                span: 14,
                offset: 10
            },
            xl: {
                span: 12,
                offset: 8
            }
        }
    };
}