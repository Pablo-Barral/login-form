/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import ReactDOM from 'react-dom'
 import Checkbox from '../components/Checkbox'
 
 
 it("renders a checkbox", () => {
     const checkbox = document.createElement('input')
     ReactDOM.render(<Checkbox/>, checkbox)
 })