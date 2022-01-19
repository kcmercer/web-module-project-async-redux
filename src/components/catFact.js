import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFail, FETCH_FAIL, getFact } from '../actions'

const Fact = ({fact, isFetching, dispatch}) => {
    useEffect(() => {
        dispatch(getFact())
    }, [])

    if (isFetching) {
        return <h2>One sec, I'm trying to find a good one...</h2>
    }

    const handleClick = () => {
        dispatch(getFact())
    }

    return (
        <>
            <div>
                <h2> Found one! </h2>
                <p>{fact.fact}</p>
            </div>
            <button onClick={handleClick}> Interesting... </button>
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
