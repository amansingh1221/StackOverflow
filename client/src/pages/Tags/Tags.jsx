import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'

const Tags = () => {

  const tagsList=[{id:1,
  tagName:"node.js",
tagDesc:"Node.js is an event-based, non-blocking, asynchronous I/O runtime that useu Google's V8 Javascript engine."},{
  tagName:"C++",
  tagDesc:"C++ is a general-purpose programming language. Initially, it was designed as an extension to C."
},
{
  tagName:"Reactjs",
  tagDesc:"React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be efficient and flexible."
},
{
  tagName:"mysql",
  tagDesc:"MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL)."
},
{
  tagName:"django",
  tagDesc:"Django is an open-source server-side web application framework written in Python."
},
{
tagName:"Excel",
tagDesc:"Only for questions on programming against Excel objects or files, or formula development. You may combine the Excel tag with VBA, VSTO, C#."
},
{
  tagName:"AJAX",
  tagDesc:"AJAX (Asynchronous JavaScript and XML) is a technique for creating interactive website user interfaces without the traditional web page"
},
{
  tagName:"function",
  tagDesc:"A function (also called a procedure, method, subroutine, or routine or macro) is a portion of code intended to carry out a single, specific task."
},{
  tagName:"matlab",
  tagDesc:"MATLAB is a high-level language and interactive programming environment for numerical computation and visualization developed by MathWork"
},
{
  tagName:"rest",
  tagDesc:"REST (Representational State Transfer) is a style of software architecture for distributed hypermedia systems such as the World Wide Web."
},
{
  tagName:"express",
  tagDesc:"Express.js is a minimal and flexible Node.js web application framework providing a robust set of features for building web applications."
},
{
  tagName:"selenium",
  tagDesc:"Selenium is a popular open-source tool for automating web browsers. When using this tag, also include other tags for the specific components."
},
{
  tagName:"performance",
  tagDesc:"For questions pertaining to the measurement or improvement of code and application efficiency."
},{
  tagName:"Unit-testing",
  tagDesc:"Unit testing is a method by which individual units of source code are tested to determine if they are fit for use."
},{
  tagName:"dart",
  tagDesc:"Dart is a class-based, statically(& strongly)-typed programming language for building web and mobile applications."
}]



  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2 tagsc'>
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions. </p>
        <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
        {/* <TagsList /> */}
        <div className='tags-list-container'>
          {
            tagsList.map((tag)=>(
              <TagsList tag={tag} key={tagsList.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Tags