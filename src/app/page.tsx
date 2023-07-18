import React from 'react'

const page = () => {
  return (
    <div>Next JS Root Page</div>
  )
}
export default page

/* 
n Next.js, the /pages directory is a special directory where 
you define your pages and API routes. The files inside the /pages 
directory automatically become accessible as routes in your application. 
However, you can organize your code and create additional directories as 
needed.

To create the custom pages in the /app directory, you need to configure Next.js
 to recognize this directory as well. You can do this by updating the
  next.config.js file in your project root:

  module.exports = {
  pagesDir: ['pages', 'app'],
};

*/