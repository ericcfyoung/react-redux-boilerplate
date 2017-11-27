import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        test: state.test
    }
};

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<p>test</p>)
    }

}

export default connect(mapStateToProps)(Container);