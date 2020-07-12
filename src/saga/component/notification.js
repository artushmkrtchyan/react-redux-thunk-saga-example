import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { notification } from 'antd';

const Notification = () => {
  const {status, message} = useSelector(state => state.global);
  useEffect(() => {
    if(status && message) {
      openNotification(status)
    }
  });

  const openNotification = (type) => {
    notification[type]({
        message
    });

    return null
  };
  return <></>
}

export default Notification