/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import ReactDOM from 'react-dom'
 import Input from '../components/Input'
 
 
 it("renders an input", () => {
     const input = document.createElement('input')
     ReactDOM.render(<Input/>, input)
 })