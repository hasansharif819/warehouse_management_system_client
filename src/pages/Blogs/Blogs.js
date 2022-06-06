import React from 'react';
import PageTitle from '../shared/PageTitle/PageTitle';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className="js">
            <PageTitle title="Blogs"></PageTitle>
                <h1>Q1: Difference between JS vs Node JS?</h1>
                <p>Ans: 
                    <h5>
                    JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                    </h5>
                    <h5>
                    Javascript is a programming language that is used for writing scripts on the website. On the other hand, NodeJS is a Javascript runtime environment.
                    </h5>
                    <h5>
                    Javascript can only be run in the browsers.And, We can run Javascript outside the browser with the help of NodeJS.
                    </h5>
                    <h5>
                    It is basically used on the client-side. And, It is mostly used on the server-side.
                    </h5>
                    <h5>
                    It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. Some of the javascript frameworks are RamdaJS, TypedJS, etc. 
                    On the other, Nodejs is written in C, C++ and Javascript.Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
                    </h5>
                </p>
            </div>
            <div className="mongo">
                <h1>Q2: When should you use nodejs and when should you use mongodb??</h1>
                <p>
                    <h5>
                     It represents data as of JSON documents. It's used for store data.
                    When it is need to store data in different cases then we try to used different types of storage like local storage , MY SQL,  MongoDB, etc. Mongo DB is a no SQL that means not only sql. 
                    When it is need to store data then we should use mongoDB. Otherwise, Node JS is an environment which used for javaScript running. It make sure that the front-end and back-end those are connected to share their resources as well and perform betther with user experience. It is mainly used for the connecting database with client side or front-end websites. 
                    </h5>
                    <h5>
                    NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.
                    And, But, MongoDB is NoSQL database which is document oriented.
                    </h5>
                </p>
            </div>
            <div className="nosql">
                    <h1>Q3: Differences between sql and nosql databases.</h1>
                    <p>
                        <h5>
                        SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. 
                        </h5>
                        <h5>
                        SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. 
                        </h5>
                        <h5>
                        SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance).
                        </h5>
                        <h5>
                        SQL databases have fixed or static or predefined schema.And NoSQL is a dynamic.
                        </h5>
                        <h5>
                        SQL databases are best suited for complex queries. And NoSQL databases are not so good for complex queries
                        </h5>
                    </p>
            </div>
            <div className="jwt">
                <h1>Q4: What is the purpose of jwt and how does it work</h1>
                <p>
                    <h5>
                        JWT stands for JSON Web Token where JSON stands for JavaScript Object Notation.
                    </h5>
                    <h5>
                    JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret or a public/private key pair.
                    </h5>
                    <h5>
                    When should you use JSON Web Tokens?
                    </h5>
                    <h5>
                    Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.
                    </h5>
                    <h5>
                    Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.
                    </h5>
                    <h5>
                        Finally it could be said that, JWT or JSON Web Token is a formatting system that is used for providing the highly sucure the users data as the scammers could not easily be founded. It is like an encryption decryption method system where data couldnot be showed by visitor and is call unvisible.
                    </h5>
                </p>
            </div>
        </div>
    );
};

export default Blogs;