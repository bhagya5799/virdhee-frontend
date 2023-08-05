import React from 'react'

const ChildComponent = ({ staticSecondPage }) => {
  return (
      <div className='second-page'>
          <div className='join-splash'>
              <p><span className='span'>splash</span>&nbsp;/&nbsp;join Us</p>
          </div>
          {staticSecondPage.map((each, index) => (
              <div className='icon-learner'>
                  <div className='icon-cad' id='pentagon'>
                      <span className='icon'><i>{<each.icon />}</i></span>
                  </div>
                  <div className='learner-card'>
                      <span className='span'>{each.title}</span>
                      <span className='description'>{each.description}</span>
                  </div>

              </div>
          ))}

      </div>
  )
}

export default ChildComponent