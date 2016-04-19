// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../../typings/react/react-global.d.ts"/>
/// <reference path="../../typings/dojo/dojo.d.ts" />
define(["require", "exports", "dojo/on", "dojo/dom-class", "app/friends", "app/profile", "app/items"], function (require, exports, on, domClass, Friends, Profile, Items) {
    let friendsData = [
        { id: 1, name: 'Sorin Armenciu', initials: 'SA', courses: 9, articles: 7 },
        { id: 2, name: 'Remus Bodean', initials: 'RB', courses: 7, articles: 10 },
        { id: 3, name: 'Bruno Donato', initials: 'BD', courses: 13, articles: 8 },
        { id: 4, name: 'Balaji Gopal', initials: 'BG', courses: 12, articles: 11 },
        { id: 5, name: 'Saritha Kaja', initials: 'SK', courses: 8, articles: 7 },
        { id: 6, name: 'Bernard Kwai-Pun', initials: 'BK', courses: 4, articles: 19 },
        { id: 7, name: 'Dave Robson', initials: 'DR', courses: 7, articles: 9 },
        { id: 8, name: 'Benazir Sharma', initials: 'BS', courses: 12, articles: 11 }
    ];
    let friends = ReactDOM.render(React.createElement(Friends.Friends, {"initialData": friendsData}), document.getElementById("friendsNode"));
    friends.getData();
    ReactDOM.render(React.createElement(Profile, null), document.getElementById("profileNode"));
    let coursesData = [
        {
            "id": 1,
            "title": "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript",
            "href": "https://app.pluralsight.com/library/courses/front-end-web-app-html5-javascript-css",
            "description": "I haven't finished this one, but so far it seems interesting.  It's nice having a primer on HTML5 and CSS3.",
            "rating": 4.0
        },
        {
            "id": 2,
            "title": "Building Web Applications with Node.js and Express 4.0",
            "href": "https://app.pluralsight.com/library/courses/nodejs-express-web-applications",
            "description": "I've enjoyed this course.  It describes alot of the basic fundamentals for structuring a Node.js app.",
            "rating": 4.5
        },
        {
            "id": 3,
            "title": "Building a Full-Stack App with React and Express",
            "href": "https://app.pluralsight.com/library/courses/react-express-full-stack-app-build",
            "description": "Can be a bit advanced at times.  But not too many other courses cover the same material.",
            "rating": 3.5
        },
        {
            "id": 4,
            "title": "Introduction to npm as a Build Tool",
            "href": "https://app.pluralsight.com/library/courses/npm-build-tool-introduction",
            "description": "This has some useful information but I'm still not sure how I will incorporate this into my build process.  Still in progress.",
            "rating": 4.0
        },
        {
            "id": 5,
            "title": "Using ES6 with TypeScript",
            "href": "https://app.pluralsight.com/library/courses/es6-with-typescript",
            "description": "I haven't taken this course yet since it was only released last month.  Looks interesting though!",
            "rating": 0.0
        }
    ];
    let articlesData = [
        {
            "id": 1,
            "title": "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy",
            "href": "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy",
            "description": "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?",
            "rating": 4.5
        },
        {
            "id": 2,
            "title": "Patterns for Large-Scale JavaScript Application Architecture",
            "href": "https://addyosmani.com/largescalejavascript/",
            "description": "Long and decent article.  Gooes over a lot of good concepts, however the article is a bit old.",
            "rating": 3.5
        },
        {
            "id": 3,
            "title": "Working with Intern Recorder",
            "href": "https://www.sitepen.com/blog/2015/08/07/working-with-intern-recorder/",
            "description": "Simple blog post on using Intern JavaScript Testing Framework to record functional test cases.  Have not read or setup yet.",
            "rating": 0.0
        },
        {
            "id": 4,
            "title": "TypeScript and JSX",
            "href": "http://www.jbrantly.com/typescript-and-jsx/",
            "description": "Great article on how to get JSX and TypeScript working together in Visual Studio 2015.  Though some concepts covered do not seem to be required, it does give alot of information in getting these two technologies working together.",
            "rating": 4.0
        },
        {
            "id": 5,
            "title": "What should I learn? React or Angular 2? What is your take? Why?",
            "href": "https://www.linkedin.com/groups/121615/121615-6087875040659984388",
            "description": "While not an article, it's a good LinkedIn discussion on the merits of both.  Seems to be an overall concensus to learn JavaScript in general, then look at a framework.",
            "rating": 4.0
        }
    ];
    let coursesComponent = ReactDOM.render(React.createElement(Items.Items, null), document.getElementById("coursesNode"));
    let articlesComponent = ReactDOM.render(React.createElement(Items.Items, null), document.getElementById("articlesNode"));
    coursesComponent.updateData(coursesData);
    articlesComponent.updateData(articlesData);
    coursesComponent.updateData(coursesData);
    on(window, "scroll", (e) => {
        if (document.body.scrollTop > 60) {
            domClass.add(document.getElementsByTagName("nav")[0], "scrolled");
        }
        else {
            domClass.remove(document.getElementsByTagName("nav")[0], "scrolled");
        }
    });
});
//# sourceMappingURL=index.js.map