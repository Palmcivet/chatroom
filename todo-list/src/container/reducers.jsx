function addDelete(state = [], action) {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    "id": action.id,
                    "status": "STATUS_UNFINISHED",
                    "content": action.text
                }
            ]
        case 'DONE':
            return [
                ...state,
                {
                    "id": action.id,
                    "status": "STATUS_FINISHED",
                    "content": action.text
                }
            ]
        default:
            return state
    }
}
export default addDelete