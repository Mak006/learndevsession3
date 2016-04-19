// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

interface IProfileItemProps {
    title: string;
    value: number;
    isReadOnly: boolean;
    id: string;
    valueOnChange(e: React.FormEvent);
}

class ProfileItem extends React.Component<IProfileItemProps, {}> {
    render() {
        let inputHiddenClass = "";
        let pHiddenClass = " hidden";
        if (this.props.isReadOnly) {
            inputHiddenClass = " hidden";
            pHiddenClass = "";
        }
        return (
            <div className="form-group">
                <label htmlFor="courses">{this.props.title}</label>
                <p className={"form-control-static" + pHiddenClass}>{this.props.value}</p>
                <input type="text" className={"form-control" + inputHiddenClass} id={this.props.id} value={this.props.value.toString()} onChange={this.props.valueOnChange.bind(this)} />
            </div>
        );
    }
}

interface IProfileButtonsProps {
    editOnClick();
    saveOnClick?();
    cancelOnClick?();
    isReadOnly: boolean;
}

class ProfileButtons extends React.Component<IProfileButtonsProps, {}> {
    render() {
        let editHiddenClass = " hidden";
        let saveHiddenClass = "";
        if (this.props.isReadOnly) {
            editHiddenClass = "";
            saveHiddenClass = " hidden";
        }
        return (
            <div className="row">
                <div className={"col-sm-6" + editHiddenClass}></div>
                <div className={"col-sm-6" + editHiddenClass}>
                    <button className="btn btn-block btn-primary" onClick={this.props.editOnClick}>Edit</button>
                </div>
                <div className={"col-sm-6" + saveHiddenClass}>
                    <button className="btn btn-block btn-danger" onClick={this.props.cancelOnClick}>Cancel</button>
                </div>
                <div className={"col-sm-6" + saveHiddenClass}>
                    <button className="btn btn-block btn-primary" onClick={this.props.saveOnClick}>Save</button>
                </div>
            </div>
        );
    }
}

interface IProfileState {
    coursesValue?: number;
    articlesValue?: number;
    isReadOnly?: boolean;
}

class Profile extends React.Component<{}, IProfileState> {
    private courses: number;
    private articles: number;
    constructor() {
        super();
        this.courses = 10;
        this.articles = 20;
        this.state = {
            coursesValue: this.courses,
            articlesValue: this.articles,
            isReadOnly: true
        }
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
    coursesOnChangeHandler(e:React.FormEvent) {
        let newVal: number = parseInt((e.target as HTMLInputElement).value);
        this.setState({
            coursesValue: newVal
        });
    }
    articlesOnChangeHandler(e:React.FormEvent) {
        let newVal: number = parseInt((e.target as HTMLInputElement).value);
        this.setState({
            articlesValue: newVal
        });
    }
    render() {
        return (
            <div>
                <ProfileItem title="Courses" value={this.state.coursesValue} id="courses" isReadOnly={this.state.isReadOnly} valueOnChange={this.coursesOnChangeHandler.bind(this)} />
                <ProfileItem title="Articles" value= {this.state.articlesValue} id="articles" isReadOnly={this.state.isReadOnly} valueOnChange={this.articlesOnChangeHandler.bind(this)} />
                <ProfileButtons editOnClick={this.editOnClickHandler.bind(this) }
                    isReadOnly={this.state.isReadOnly}
                    saveOnClick={this.saveOnClickHandler.bind(this) }
                    cancelOnClick={this.cancelOnClickHandler.bind(this) } />
            </div>
        );
    }
}

export = Profile;

