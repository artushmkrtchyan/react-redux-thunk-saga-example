import React, {Component} from 'react';
import { connect } from 'react-redux';
import { List, Skeleton } from 'antd';
import {DeleteOutlined, MinusSquareOutlined, CheckSquareOutlined} from '@ant-design/icons';
import {todoActions} from '../redux/todos/action'

class Todo extends Component {
    onclick = (item) => () => {
        this.props.editTodo({id: item.id, done: !item.completed})
    }
    render() {
        const {item, loading} = this.props
        return (
            <List.Item
                actions={
                    [   
                        item.completed ? 
                            <CheckSquareOutlined 
                                onClick={this.onclick(item)} 
                                style={{ color: 'green' }} 
                            /> 
                        : 
                            <MinusSquareOutlined 
                                onClick={this.onclick(item)} 
                            />,
                        <DeleteOutlined 
                            onClick={() => this.props.deleteTodo(item.id)} 
                            style={{ color: 'red' }}
                        />
                    ]
                }
            >
                <Skeleton title={false} loading={loading} active>
                    <List.Item.Meta
                        title={item.title}
                        description={item.completed}
                    />
                </Skeleton>
            </List.Item>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        editTodo: (params) => {dispatch(todoActions.editTodo(params))},
        deleteTodo: (id) => {dispatch(todoActions.deleteTodo(id))}
    })
};

export default connect(null, mapDispatchToProps)(Todo)