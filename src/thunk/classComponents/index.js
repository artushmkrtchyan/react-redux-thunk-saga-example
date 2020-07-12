import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { List, Button } from 'antd';
import {todoActions} from '../redux/todos/action'
import Todo from './todo'

const limit = 3;
class Todos extends React.Component {
  state = {
    initLoading: true,
    data: [],
    list: [],
    start: 0,
  };

  componentDidMount() {
      this.props.getTodos(this.state.start, limit)
  }

  componentDidUpdate(prevProps) {
        if(prevProps.loading && !this.props.loading){
            this.setState({
                initLoading: false,
                data: this.props.todos,
                list: this.props.todos,
              });
        }
  }

  onLoadMore = () => {
      this.setState(prevState => {
          return {start: prevState.start + limit}
        }, 
        () => this.props.getTodos(this.state.start, limit))
  };

  render() {
    const {loading} = this.props;
    const { initLoading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <>
        <h3 className="component-title">Class Component</h3>
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={item => <Todo item= {item} loading={loading}/>}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
    loading: state.todos.loading,
    todo: state.todos.todo
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(todoActions, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos)