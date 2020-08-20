import axios from 'axios';
import CONFIG from '../components/Config'
export const SYN_ADDED="SYN_ADDED";
export const ANT_ADDED="ANT_ADDED";
export const SYN_USED = "SYN_USED"
export const ANT_USED = "ANT_USED"
export const addSynonym =(data) => ({
    type: SYN_ADDED,
    payload : data
})
export const addAntonym =(data) => ({
    type: ANT_ADDED,
    payload : data
})
export const synUsed=(index)=>({
    type:SYN_USED,
    payload:index
})
export const antUsed=(index)=>({
    type:ANT_USED,
    payload:index
})
export const fetchRelatedWord = ( word ) => (dispatch) =>  {

        const url=CONFIG.API_URL.wordapi+word+CONFIG.API_URL.RELATED_WORDS+ CONFIG.API_KEY;
        axios.get(url)
        .then(res=>
               { 
                   let ants = res.data.filter(item => item.relationshipType === "antonym")[0]?.words.map(item => ({word: item, used: false}))
                   let syns = res.data.filter(item => item.relationshipType === "synonym")[0]?.words.map(item => ({word: item, used : false}))
                 
                if(ants){
                    dispatch(addAntonym(ants))
                }
                if(syns){
                    dispatch(addSynonym(syns))
                    
                }
                   
            
            }
        )
        .catch(err => console.log(err))
    
    }
