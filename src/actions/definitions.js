import axios from 'axios';

export const DEF_ADDED = "DEF_ADDED"
export const DEF_USED = "DEF_USED"
export const DEF_HINT = "DEF_HINT"
export const addDefinitions =(data) => ({
    type: DEF_ADDED,
    payload : data
})
export const defUsed=(index)=>({
    type:DEF_USED,
    payload:index
})

export const fetchDef = ( word ) => (dispatch) =>  {

        const url=`https://fourtytwowords.herokuapp.com/word.json/${word}/definitions?api_key=a98eff3917981ec80a86523e17be5f61287bd0a6595728ef9feb6a9cf50f354db16fe8aa5e96d7405784d4771876d1ff84d8b644c569371bd70ce16fa49d2fff5e15de4c572b47f55792f763df03a2c7`;
        axios.get(url)
        .then(res=>{ 
                const def= res.data.map((def, idx)=>({text: def.text, used : idx === 0 ? true : false}) )
                dispatch(addDefinitions(def))
            }
        )
        .catch(err => console.log(err))
    
    }


    
