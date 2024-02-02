import React from 'react'
import { NumStyle } from './style';

const NumberSec = () => {
  return (
    <NumStyle>
        <NumStyle.Container>
            <NumStyle.Wrapper>
                <NumStyle.NumBox>
                   <NumStyle.Num>150</NumStyle.Num> 
                   <NumStyle.Title>Exmployees</NumStyle.Title>
                </NumStyle.NumBox>
                <NumStyle.NumBox>
                   <NumStyle.Num>20</NumStyle.Num> 
                   <NumStyle.Title>Projects</NumStyle.Title>
                </NumStyle.NumBox>
                <NumStyle.NumBox>
                   <NumStyle.Num>230</NumStyle.Num> 
                   <NumStyle.Title>Customers</NumStyle.Title>
                </NumStyle.NumBox>
                <NumStyle.NumBox>
                   <NumStyle.Num>3</NumStyle.Num> 
                   <NumStyle.Title>Offices</NumStyle.Title>
                </NumStyle.NumBox>
            </NumStyle.Wrapper>
        </NumStyle.Container>
    </NumStyle>
  )
}

export default NumberSec;

