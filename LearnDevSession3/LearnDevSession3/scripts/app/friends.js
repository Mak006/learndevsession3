// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../../typings/react/react-global.d.ts"/>
class Friend extends React.Component {
    render() {
        return (React.createElement("div", {"className": "friend"}, React.createElement("div", {"className": "img-circle friend-initials"}, this.props.initials), React.createElement("div", {"className": "friend-name"}, this.props.name), React.createElement("div", {"className": "friend-details"}, React.createElement("div", null, this.props.courses, " courses taken"), React.createElement("div", null, this.props.articles, " articles reviewed"))));
    }
}
class Friends extends React.Component {
    render() {
        let friendsList = [];
        this.props.initialData.forEach((friend) => {
            friendsList.push(React.createElement(Friend, {"key": friend.id, "initials": friend.initials, "name": friend.name, "articles": friend.articles, "courses": friend.courses}));
        });
        return (React.createElement("div", null, friendsList));
    }
}
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
ReactDOM.render(React.createElement(Friends, {"initialData": friendsData}), document.getElementById("friendsNode"));
//# sourceMappingURL=friends.js.map