import React from 'react'
import './RightSidebar.css'
import pen from '../../assets/pen.png'
import logo from '../../assets/logo1.png'

const Widget = () => {
  return (
    <div className='widget'>
      <h3>Hello World!</h3>
      <div className='right-sidebar-div1'>
        <p>This is a collaboratively edited question and answer site for professional and enthusiast programmers. It's 100% free.<br/><br/>
Got a question about the site itself? meta is the place to talk about things like what questions are appropriate, what tags we should use, etc.</p>
      </div>
      <div className='right-sidebar-div2'>
        
      </div>
      <h3>The Overflow Blog</h3>
      <div className='right-sidebar-div1'>
        <img src={pen} alt='pen' width='18' />
        <p>After crypto’s reality check, an investor remains cautiously optimistic</p>
      </div>
      <div className='right-sidebar-div1'>
        <img src={pen} alt='pen' width='18' />
        <p>Your tech toolbox: The middle ground between tech chaos and rigidity.</p>
      </div>
      <div className='right-sidebar-div1'>
        <img src={pen} alt='pen' width='20' />
        <p>Observability is key to the future of Software career.</p>
      </div>
      <h3>Featured on Meta</h3>
      <div className='right-sidebar-div1'>
      <img src={logo} alt='pen' width='20' />
        <p>
Temporary policy: ChatGPT is banned</p>
      </div>
      <div className='right-sidebar-div1'>
      <img src={logo} alt='pen' width='20' />
        <p>
Improving how we report updates and receive feedback on the Content Discovery</p>
      </div>
      <div className='right-sidebar-div1'>
      <img src={logo} alt='pen' width='20' />
        <p>
Plagiarism flag and moderator tooling has launched to Stack Overflow!</p>
      </div>
      <div className='right-sidebar-div1'>
      <img src={logo} alt='pen' width='20' />
        <p>
        The [rowname] and [columnname] tags are being burninated</p>
      </div>
      

    </div>
  )
}

export default Widget