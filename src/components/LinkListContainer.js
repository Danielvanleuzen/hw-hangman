import * as React from 'react'
import LinkList from './Linklist'
import { connect } from 'react-redux'

class LinkListContainer extends React.PureComponent {
  selectLink = (id) => {
    this.props.dispatch({
      type: 'SELECT_LINK',
      payload: id
  
    })
  
  }

  render() {
    return( <LinkList links={this.props.links} selectLink={this.selectLink} />
    )
    }
}

const mapStateToProps = (state) => {
  return {
    links: state.links
  }
}

export default connect(mapStateToProps)(LinkListContainer)

