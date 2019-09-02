import Map from "./Map"

class MapGame extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.addEventListener('keypress',
            (e) => (
                this.handleController(sa, e.key, timer)
            )
        )
    }

    componentWillUnmount() {
        window.removeEventListener('keypress',
            (e) => (
                this.handleController(sa, e.key, timer)
            )
        )
    }

    render() {
        return <Map />
    }
}

export default MapGame