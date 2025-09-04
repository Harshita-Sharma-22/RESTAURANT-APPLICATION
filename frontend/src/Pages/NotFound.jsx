import React from 'react'

const NotFound = () => {
  return (
    <>
    <section className='notFound'>
      <div className="container">
        <img src="/notFound.svg" alt="notFound" />
        <h1>LOOKS LIKE YOU'RE LOST</h1>
        <p>We can't seem to find you the page you are looking for</p>
        <Link to={'/'}>Back to Home</Link>
      </div>
    </section>
    </>
  )
}

export default NotFound