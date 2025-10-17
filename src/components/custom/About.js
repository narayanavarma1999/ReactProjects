import React from 'react'
import UserClass from './UserClass'

class About extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  
  }

  render() {
    console.log(`Parent Render`)
    return (<div className='about'>
      <UserClass name={"First"} location={"Vizag"} />
    </div>)
  }

}

export default About