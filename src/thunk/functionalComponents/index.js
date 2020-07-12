import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Collapse } from 'antd';
import {getUsers, getUser} from '../redux/users/action';
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
    const {users} = useSelector(state => state.users);
    const {isLoading} = useSelector(state => state.users);
    const {user = {}} = useSelector(state => state.users);
    const {isLoadingUser} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    useEffect(() => {
        if(userId) {
            dispatch(getUser(userId));
        }
    }, [userId]);

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