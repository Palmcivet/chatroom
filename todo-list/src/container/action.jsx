var itemId = 0
export const addItem = text => ({
    type: 'ADD',
    id: itemId++,
    text
})

export const deleteItem = (id, text) => ({
    type: 'DONE',
    id: id,
    text
})

export const filterList = filterKey => ({
    type: 'FILTER',
    filterKey
})