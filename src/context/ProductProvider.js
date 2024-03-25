import { createContext, useContext, useReducer } from 'react'
import Products from './Products';
import { productReducer } from './Reducers';

const productContext = createContext();// creating context
// context provider -Publisher 
const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, {
        products: Products,
        cart: []
    })
    return (
        <productContext.Provider value={{ state, dispatch }}>
            {children}
        </productContext.Provider>
    )
}

export default ProductProvider;

//subscriber
export const useProduct = () => {
    const context = useContext(productContext);
    if (!context) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
}