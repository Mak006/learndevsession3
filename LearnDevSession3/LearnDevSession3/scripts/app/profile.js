// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
class ProfileItem extends React.Component {
    render() {
        let inputHiddenClass = "";
        let pHiddenClass = " hidden";
        if (this.props.isReadOnly) {
            inputHiddenClass = " hidden";
            pHiddenClass = "";
        }
        return (React.createElement("div", {"className": "form-group"}, React.createElement("label", {"htmlFor": "courses"}, this.props.title), React.createElement("p", {"className": "form-control-static" + pHiddenClass}, this.props.value), React.createElement("input", {"type": "text", "className": "form-control" + inputHiddenClass, "id": this.props.id, "value": this.props.value.toString(), "onChange": this.props.valueOnChange.bind(this)})));
    }
}
class ProfileButtons extends React.Component {
    render() {
        let editHiddenClass = " hidden";
        let saveHiddenClass = "";
        if (this.props.isReadOnly) {
            editHiddenClass = "";
            saveHiddenClass = " hidden";
        }
        return (React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col-sm-6" + editHiddenClass}), React.createElement("div", {"className": "col-sm-6" + editHiddenClass}, React.createElement("button", {"className": "btn btn-block btn-primary", "onClick": this.props.editOnClick}, "Edit")), React.createElement("div", {"className": "col-sm-6" + saveHiddenClass}, React.createElement("button", {"className": "btn btn-block btn-danger", "onClick": this.props.cancelOnClick}, "Cancel")), React.createElement("div", {"className": "col-sm-6" + saveHiddenClass}, React.createElement("button", {"className": "btn btn-block btn-primary", "onClick": this.props.saveOnClick}, "Save"))));
    }
}
class Profile extends React.Component {
    constructor() {
        super();
        this.courses = 10;
        this.articles = 20;
        this.state = {
            coursesValue: this.courses,
            articlesValue: this.articles,
            isReadOnly: true
        };
    }
    editOnClickHandler() {
        this.setState({
            isReadOnly: false
        });
    }
    saveOnClickHandler() {
        this.setState({
            isReadOnly: true
        });
        this.courses = this.state.coursesValue;
        this.articles = this.state.articlesValue;
    }
    cancelOnClickHandler() {
        this.setState({
            coursesValue: this.courses,
            articlesValue: this.articles,
            isReadOnly: true
        });
    }
    coursesOnChangeHandler(e) {
        let newVal = parseInt(e.target.value);
        this.setState({
            coursesValue: newVal
        });
    }
    articlesOnChangeHandler(e) {
        let newVal = parseInt(e.target.value);
        this.setState({
            articlesValue: newVal
        });
    }
    render() {
        return (React.createElement("div", null, React.createElement(ProfileItem, {"title": "Courses", "value": this.state.coursesValue, "id": "courses", "isReadOnly": this.state.isReadOnly, "valueOnChange": this.coursesOnChangeHandler.bind(this)}), React.createElement(ProfileItem, {"title": "Articles", "value": this.state.articlesValue, "id": "articles", "isReadOnly": this.state.isReadOnly, "valueOnChange": this.articlesOnChangeHandler.bind(this)}), React.createElement(ProfileButtons, {"editOnClick": this.editOnClickHandler.bind(this), "isReadOnly": this.state.isReadOnly, "saveOnClick": this.saveOnClickHandler.bind(this), "cancelOnClick": this.cancelOnClickHandler.bind(this)})));
    }
}
ReactDOM.render(React.createElement(Profile, null), document.getElementById("profileNode"));
//# sourceMappingURL=profile.js.map