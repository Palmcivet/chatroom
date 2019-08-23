import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class AddItem extends Component {
    static contextTypes = {
        store: PropTypes.object
    }
    componentDidMount() {
        this.context.store.dispatch({ type: 'ADD' });
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}
function mapDispatchToProps(dispatch) {
    return {
        add: () => dispatch({ type: 'ADD' })
    }
}
export default AddItem = connect(mapStateToProps, mapDispatchToProps)();