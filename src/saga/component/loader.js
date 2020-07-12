import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => <div className="spin-loading">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 28}} spin />} />
    </div>

export default Loader;