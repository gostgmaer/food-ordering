import React from 'react'
import './checkout.scss'
import classes from './checkout.module.scss';
const Checkout = (props) => {

    const confirmHandler = (event) => {
        event.preventDefault();
    };
    return (
        <div className='Checkout'>
            <form className={classes.form} onSubmit={confirmHandler}>
                <div className="forms">
                    <div >

                        <input type='text' placeholder='Your Name' id='name' />
                    </div>
                    <div >

                        <input type='text' placeholder='Street' id='street' />
                    </div>
                    <div >

                        <input type='text' placeholder='Postal Code' id='postal' />
                    </div>
                    <div >

                        <input type='text' placeholder='City' id='city' />
                    </div>
                </div>
                <div className={classes.actions}>
                    <button type='button' onClick={props.onCancel}>
                        Cancel
                    </button>
                    <button className={classes.submit}>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout