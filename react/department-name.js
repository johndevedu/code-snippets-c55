componentWillReceiveProps(futureProps) {
  if (this.props.match.params.id) { // user is updating
      if (futureProps.currentUser.isItAdmin !== this.props.currentUser.isItAdmin) {
          // page will re-render twice, the second time the props will come through
          this.setState({
              isItAdmin: futureProps.currentUser.isItAdmin,
              activeTab: futureProps.currentUser.isItAdmin ? "#tab1-4" : "#tab1-3",
              currentUser: futureProps.currentUser
          })
      }
  } else { // user is making a new request
      // ...
  }
}

render(){
  // note to cohort: copy and paste render for department here...
}
