export const ADD_SCORE='ADD_SCORE';
export const DEDUCT_SCORE='DEDUCT_SCORE';
export const SET_SCORE='SET_SCORE'
export const addScore=(score)=>
{
    return(
        {
            type: ADD_SCORE,
            payload:score
        }
    )
}
export const deductScore=(score)=>
{
    return(
        {
            type: DEDUCT_SCORE,
            payload:score
        }
    )
}
export const setScore=(score)=>
{
    return(
        {
            type: SET_SCORE,
            payload:score
        }
    )
}
