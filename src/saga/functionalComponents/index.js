import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Collapse } from 'antd';
import {getUsersStart, getUserStart} from '../redux/users/action';
import Loader from '../component/loader';

const { Panel } = Collapse;

const getUserInfo = ({name, email, phone, address: {city, street} = {}}) => {
    return (
        <ul>
            <li>
                {`name: ${name}. email: ${email}`}
            </li>
            <li>
                {`city: ${city}. street: ${street}`}
            </li>
            <li>
                {`phone: ${phone}`}
            </li>
        </ul>
    )
}

const Users = () => {
    const dispatch = useDispatch();
    const [userId, setUserID] = useState(null);
    const {users, user = {}, isLoading, isLoadingUser} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getUsersStart())
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(userId) {
            dispatch(getUserStart(userId));
        }
    }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <h3 className="component-title">Functional Component</h3>
            {
                isLoading ? 
                    <Loader />
                    :
                    <Collapse accordion onChange={(key)=> setUserID(key)}>
                        {
                            users.map(item => 
                                <Panel header={`${item.name}. ${item.email}`} key={item.id}>
                                    {
                                        isLoadingUser ? 
                                            <Loader />
                                        :
                                            getUserInfo(user)
                                    }
                                </Panel>
                            )
                        }
                    </Collapse>
            }
        </>
    )
}

export default Users;