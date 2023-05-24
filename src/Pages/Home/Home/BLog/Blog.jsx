import React from 'react';

const Blog = () => {
               return (
            
<div className=''>
   <h2 className='text-center text-4xl text-green-600 mb-6'>This is Blog section</h2>

<div className='gird-cols-1 md:cols-2 lg:cols-1 m-5'>
<div className='border'>
   <h2 className='text-red-600'>What is an access token and refresh token?</h2>
   <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times.</p> <br />
   <div>
   <h2 className='text-fuchsia-600'>Compare SQL and NoSQL databases?</h2>
   <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p> <br />
</div>
<div>
   <h2 className='text-green-600'>What is express js? What is Nest JS</h2>
   <p>Next Js: NestJS is a framework for developing modern server-side applications in Node.js. </p>
   <p> Express Js : Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.</p> <br />
</div>
<div>
   <h2 className='text-indigo-500'>
   What is MongoDB aggregate and how does it work? 
   </h2>
   <p>Data aggregators work by combining atomic data from multiple sources, processing the data for new insights and presenting the aggregate data in a summary view. Furthermore, data aggregators usually provide the ability to track data lineage and can trace back to the underlying atomic data that was aggregated.</p> <br />
</div>
</div>
</div>

</div>
               );
};

export default Blog;