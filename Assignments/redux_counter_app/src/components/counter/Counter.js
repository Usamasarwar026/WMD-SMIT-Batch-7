import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../../redux/counterSlice/counterSlice'
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import './counter.css'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <h1>counter App using react redux toolkit</h1>
        <div className="content">
            <div className="container">
                <div className="display">
                    <div className="counterdisplay">
                        {count}
                    </div>
                </div>
                <div className="btn">
                    <button onClick={() => dispatch(increment())}><MdAdd /></button>
                    <button onClick={() => dispatch(decrement())}><FiMinus /></button>
                    <button onClick={() => dispatch(reset())}><GrPowerReset /> </button>
                </div>
                <div className="footer">
                © Made by Usama
                </div>
            </div>
        </div>
        </>
    )
}