let itemId = 0
export const addItem = text => ({
    type: 'ADD',
    id: itemId++,
    text
})

export const deleteItem = id => ({
    type: 'DONE',
    id
})

export const filterList = filterKey => ({
    type: 'FILTER',
    filterKey
})