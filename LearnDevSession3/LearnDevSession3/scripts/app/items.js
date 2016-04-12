// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
class Item extends React.Component {
    formattedRating() {
        if (this.props.rating > 0) {
            return this.props.rating.toFixed(1).toString();
        }
        else {
            return "NA";
        }
    }
    render() {
        return (React.createElement("div", {"className": "record"}, React.createElement("div", {"className": "record-details"}, React.createElement("div", {"className": "record-title"}, React.createElement("a", {"href": this.props.href}, this.props.title)), React.createElement("div", {"className": "record-description"}, this.props.description)), React.createElement("div", {"className": "record-rating"}, this.formattedRating())));
    }
}
class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    updateData(newData) {
        this.setState({
            data: newData
        });
    }
    render() {
        debugger;
        let itemsList = [];
        this.state.data.forEach((item) => {
            itemsList.push(React.createElement(Item, {"key": item.id, "title": item.title, "description": item.description, "rating": item.rating, "href": item.href}));
        });
        return (React.createElement("div", null, itemsList));
    }
}
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
let coursesComponent = ReactDOM.render(React.createElement(Items, null), document.getElementById("coursesNode"));
let articlesComponent = ReactDOM.render(React.createElement(Items, null), document.getElementById("articlesNode"));
coursesComponent.updateData(coursesData);
articlesComponent.updateData(articlesData);
coursesComponent.updateData(coursesData);
//# sourceMappingURL=items.js.map