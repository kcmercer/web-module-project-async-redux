import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFail, FETCH_FAIL, getFact } from '../actions'

const Fact = ({}) => {

    useEffect(() => {
        dispatch(getFact())
    })


    return (
        <>
            <div>
                <h2> Cat Fact! </h2>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        fact: state.fact,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Fact);
