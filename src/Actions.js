export const TOGGLE_DATAPANEL = 'TOGGLE_DATAPANEL';
export const TOGGLE_MARKER = 'TOGGLE_MARKER';
export const SELECT_MARKERS = 'SELECT_MARKERS';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_DATAPANEL: 'SHOW_DATAPANEL',
    SHOW_ALL: 'SHOW_ALL'
}

export function toggleDataPanel(index) 
{
    return {type: TOGGLE_DATAPANEL, index}
}

export function toggleMarker(index) 
{
    return {type: TOGGLE_MARKER, index}
}

export function selectMarkers(indexes)
{
    return {type: SELECT_MARKERS, indexes}
}

export function setVisibilityFilter(filter) 
{
    return {type: SET_VISIBILITY_FILTER, filter}
}