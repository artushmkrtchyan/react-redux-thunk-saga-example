import React, {Component} from 'react';
import { connect } from 'react-redux';
import { List, Skeleton } from 'antd';
import {DeleteOutlined, MinusSquareOutlined, CheckSquareOutlined} from '@ant-design/icons';
import {editTodoStart, deleteTodoStart} from '../redux/todos/action'

class Todo extends Component {
    onclick = (item) => () => {
        this.props.editTodoStart({id: item.id, done: !item.completed})
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
                            onClick={() => this.props.deleteTodoStart(item.id)} 
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
        editTodoStart: (params) => {dispatch(editTodoStart(params))},
        deleteTodoStart: (id) => {dispatch(deleteTodoStart(id))} 
    })
};

export default connect(null, mapDispatchToProps)(Todo)