import { css } from 'styled-components'
import styled from 'styled-components'
import React from 'react'

function Button(props){
    return(
        <button className={props.className} onClick={props.function}>{props.value}</button>
        )
    }
    
const StyledButton = styled(Button)`
background: #0DBDBD;
border: 0;
color: #FFFFFF;
padding: 11px;
border-radius: 10px;
${
    props => props.success && css`
    padding: 65px;
    font-size: 36px;
    `
}
`
export default StyledButton