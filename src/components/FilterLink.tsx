import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/actions'
import Link from '../components/Link'

export const mapStateToProps = (state: any, ownProps: any) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

export const mapDispatchToProps = (dispath: any, ownProps: any) => {
    return {
        onClick: () => {
            dispath(setVisibilityFilter(ownProps.filter))
        }
    }
}

export const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);