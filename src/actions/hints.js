export const FETCH_HINTS_SUCCESS='FETCH_HINTS_SUCCESS'
  
  export const fetchHintsTypes = (hintType,hint) => ({
    type: FETCH_HINTS_SUCCESS,
    hintType,
    hint,
  });

