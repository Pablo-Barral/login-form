/**
 * @jest-environment jsdom
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../components/Button'


it("renders a button", () => {
    const btn = document.createElement('button')
    ReactDOM.render(<Button/>, btn)
})