import { useReducer, useEffect } from "react";
import reducer from '../reducers/reducer'
const useAPI = () => {
    const INIT_STATE = {
        iceCreams: [],
        slides:[],
        isAPILoaded: false,
        cart: [],
        totalAmount: 0,
        Sundaes: [],
        Cones: [],
        scoops: [],
        item: []
    }
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const { iceCreams, totalAmount, cart, Sundaes, Cones, Scoops, item,slides } = state
    useEffect((prevState) => {
        fetch('https://jsonblob.com/api/60f63548-b24f-11ea-a473-9b04387a67b5').
            then(response => response.json()).
            then(json => {
                const {a,b}=json
                dispatch({
                    type: 'API_SUCCESS',
                    payload: { iceCreams: [...b],slides:[...a], isAPILoaded: true }
                })
            })
    }, []);
    useEffect((prevState) => {
        dispatch({ type: 'TOTAL_AMOUNT' })
    }, [cart]);
    const incrementCounter = (index) => {
        dispatch({
            type: 'INCREMENT_COUNTER',
            payload: { index }
        }
        )
    }
    const decrmentCounter = (index) => {
        dispatch({
            type: 'DECREMENT_COUNTER',
            payload: { index }
        }
        )
    }

    const additem = (index) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: { index }


        })
    }
    const removeProduct = (index) => {
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: { index }
        })
    }
    const sundaes = () => {
        dispatch({
            type: 'SUNDAES',

        })
    }
    const cones = () => {
        dispatch({
            type: 'CONES',

        })
    }
    const scoops = () => {
        dispatch({
            type: 'SCOOPS',

        })
    }
    const Item = (index) => {
        dispatch({
            type: 'ITEM',
            payload: { index }
        })
    }
    const reset = () => {
        dispatch({
            type: 'RESET'
        })
    }
    const addSitem = (index) => {
        dispatch({
            type: 'ADD_S_ITEM',
            payload: { index }
        })
    }
    const addsitem = (index) => {
        dispatch({
            type: 'ADD_s_ITEM',
            payload: { index }
        })
    }
    const addCitem = (index) => {
        dispatch({
            type: 'ADD_C_ITEM',
            payload: { index }
        })
    }
    const Sitem = (index) => {
        dispatch({
            type: 'S_ITEM',
            payload: { index }
        })
    }
    const sitem = (index) => {
        dispatch({
            type: 's_ITEM',
            payload: { index }
        })
    }
    const Citem = (index) => {
        dispatch({
            type: 'C_ITEM',
            payload: { index }
        })
    }


    return {
        state,
        incrementCounter,
        decrmentCounter,
        additem,
        addSitem,
        addCitem,
        addsitem,
        Sitem,
        Citem,
        sitem,
        removeProduct,
        sundaes,
        cones,
        scoops,
        Item,
        reset
    }
}
export default useAPI