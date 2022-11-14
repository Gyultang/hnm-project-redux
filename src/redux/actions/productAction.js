import {productActions} from '../reducers/productReducer'

function getProducts(searchQuery){
    return async(dispatch, getState)=>{
        let url = `https://my-json-server.typicode.com/Gyultang/hnm-project/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json()
        // dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}})
        dispatch(productActions.getAllProducts({data}))
        //매개변수로 전달된 값은 알아서 payload라는 필드 아래로 들어간다. 

        // if(data.length < 1){
        //     setError(`${searchQuery}와 일치하는 상품이 없습니다`);
        // }else{
        //     setProductList(data)
        // }
        // setProductList(data)
   
    }
}
function getProductDetail(id){
    return async (dispatch) =>{
        let url = `https://my-json-server.typicode.com/Gyultang/hnm-project/products/${id}`;
        let response = await fetch(url);
        let data = await response.json()
        dispatch({type:"GET_SINGLE_PRODUCT_SUCCESS", payload:{data}})
    }
}

export const productAction={getProducts,getProductDetail};