import {VisibilityFilters} from './Actions'

const initState = {
    visibilityFilter: VisibilityFilters.SHOW_DATAPANEL,
    items: []
}

export default function rootReducer(state, action) 
{
    if (typeof state == 'undefined') 
    {
        return initState;
    }

    return state;
}