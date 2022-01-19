import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFact } from '../actions'
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-top: 5%;
    display: inline-block;
    width: 50%;
`

const StyledP = styled.p`
    color: #D6D5CB;
`

const StyledH2 = styled.h2`
    color: #CBCCD6;
`

const StyledButton = styled.button`
    display: inline-block;
    width: 25%;
    margin: 2% 15% 2% 15%;
    padding: 1%;
    border-radius: 6px;
    background: #D6D5CB;
    color: #181A18;
`

const StyledImg = styled.img`
    border-radius: 6px;
    border: solid #D6D5CB 3px;
    padding: 2px;
`

const Fact = ({fact, isFetching, dispatch}) => {
    useEffect(() => {
        dispatch(getFact())
    }, [])

    if (isFetching) {
        return (
            <>
                <StyledImg width='500px' src="http://lifewithdogsandcats.com/wp-content/uploads/Elsa-Clair-on-the-printer-4.jpg" alt="cat looking into printer"/>
                <StyledH2>Sorry... It's an old printer.</StyledH2>
            </>
        )
    }

    const handleClick = () => {
        dispatch(getFact())
    }

    return (
        <>
            <StyledDiv>
                <StyledImg src="https://grist.org/wp-content/uploads/2011/05/cat-printer-emails-flickr-marco-varisco.jpg" alt="cat sitting on printer" />
                <StyledH2> Hot off the presses... </StyledH2>
                <StyledP>{fact.fact}</StyledP>
            </StyledDiv>
            <StyledButton onClick={handleClick}> Interesting... </StyledButton>
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
