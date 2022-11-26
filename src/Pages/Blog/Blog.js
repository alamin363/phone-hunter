import React from "react";
import {
  FaAllergies,
  FaAngular,
  FaArrowDown,
  FaReact,
  FaRegCommentDots,
  FaVuejs,
} from "react-icons/fa";

const Blog = () => {
  // const handaleClick = () => {
  //   return <input type="text" />
  // };
  return (
    <div className=" grid lg:grid-cols-2 gap-3">
      <div className="border border-primary relative">
        <label
          // onClick={() => handaleClick()}
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          <FaRegCommentDots />
        </label>
        <h3 className="text-lg font-extrabold">
          <div className="divider">
            Question <FaArrowDown />
          </div>
          What are the different ways to manage a state in a React application?
        </h3>
        <p className="py-4 font-bold">
          <div className="divider">
            Answers <FaArrowDown />
          </div>
          <span className="font-extrabold">
            The Four Kinds of React State to Manage
          </span>{" "}
          When we talk about state in our applications, it’s important to be
          clear about what types of state actually matter. Local state is data
          we manage in one or another component. Local state is most often
          managed in React using the useState hook. Global state is data we
          manage across multiple components Server state is a simple concept,
          but can be hard to manage alongside all of our local and global UI
          state URL state is often missing as a category of state, but it is an
          important one. In many cases, a lot of major parts of our application
          rely upon accessing URL state. Try to imagine building a blog without
          being able to fetch a post based off of its slug or id that is located
          in the URL!
        </p>
      </div>
      <div className="border border-primary relative">
        <label
          // onClick={() => handaleClick()}
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          <FaRegCommentDots />
        </label>
        <h3 className="text-lg font-extrabold">
          <div className="divider">
            Question <FaArrowDown />
          </div>
          What is a unit test? Why should we write unit tests?
        </h3>
        <p className="py-4">
          <div className="divider">
            Answers <FaArrowDown />
          </div>
          <span className="font-extrabold">
            A unit test is a way of testing a unit - the smallest piece of code
            that can be logically isolated in a system. In most programming
            languages, that is a function, a subroutine, a method or property.
            The isolated part of the definition is important.
          </span>{" "}
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
      </div>
      <div className="border border-primary relative">
        <label
          // onClick={() => handaleClick()}
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          <FaRegCommentDots />
        </label>
        <h3 className="text-lg font-extrabold">
          <div className="divider">
            Question <FaArrowDown />
          </div>
          How does prototypical inheritance work?
        </h3>
        <p className="py-4">
          <div className="divider">
            Answers <FaArrowDown />
          </div>
          <span className="font-extrabold">
            Every object in JavaScript has a built-in property, which is called
            its prototype. The prototype is itself an object, so the prototype
            will have its own prototype, making what's called a prototype chain.
            The chain ends when we reach a prototype that has null for its own
            prototype.
          </span>{" "}
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div className="border border-primary relative">
        <label
          // onClick={() => handaleClick()}
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          <FaRegCommentDots />
        </label>
        <h3 className="text-lg font-extrabold">
          <div className="divider">
            Question <FaArrowDown />
          </div>
          React vs. Angular vs. Vue?
        </h3>
        <p className="py-4">
          <div className="divider">
            Answers <FaArrowDown />
          </div>
          <smal className="flex align-middle">
            Vue <FaVuejs />
          </smal>{" "}
          provides higher customizability and hence is easier to learn than
          Angular or React. Further, Vue has an overlap with Angular and React
          with respect to their functionality like the use of components. Hence,
          the transition to Vue from either of the two is an easy option. The
          Prototypal Inheritance is a feature in javascript used to add methods
          and properties in objects. It is a method by which an object can
          inherit the properties and methods of another object. Traditionally,
          in order to get and set the [[Prototype]] of an object, we use Object.
          getPrototypeOf and Object.
          <smal className="flex align-middle">
            Angular <FaAngular />
          </smal>{" "}
          Angular is better than React if your application is enterprise-grade and you need to incorporate complex functionalities like progressive, single-page, and native web apps. However, React specializes in creating UI components and can be used in any application, including single-page apps.
          <smal className="flex align-middle">
          React <FaReact />
          </smal>{" "}
          One of the main reasons for the popularity of React is that it works very efficiently with the DOM. Vue also uses the virtual DOM, but compared to React, Vue has better performance and stability. According to this data, Vue and React's performance difference is subtle since it is only a few milliseconds.

          <FaAllergies />Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.
        </p>
      </div>
    </div>
  );
};

export default Blog;
