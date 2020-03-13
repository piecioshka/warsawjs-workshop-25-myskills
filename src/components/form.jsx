import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

import Headline from './headline';
import UserIdHelper from '../helpers/user-id.helper';
import AnswersHelper from '../helpers/answers.helper';

class FormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answers: {
                javascriptLevel: 0,
                hasVisitedWorkshops: "",
                javascriptDurationExperience: "",
                typescriptLevel: 0,
                isTypeScriptLover: "",
                knowsInterpolationProcess: "",
                knowsDifferenceBetweenDOMAndHTML: "",
                isSCSSLover: ""
            }
        };
        this.$form = React.createRef();
        this.onChangeField_knowsInterpolationProcess = this.onChangeField_knowsInterpolationProcess.bind(this);
    }

    async componentDidMount() {
        const userId = await UserIdHelper.getUserId();
        const userName = await UserIdHelper.getUserId() || 'there';
        const userAnswers = await AnswersHelper.getByUserId(userId);
        const answers = Object.assign(this.state.answers, userAnswers);

        this.setState({ userName, answers });
    }

    async onSubmit(evt) {
        evt.preventDefault();

        const $form = new FormData(this.$form.current);
        const formState = {};

        console.group('Dane formularza');
        for (let [key, value] of $form.entries()) {
            console.log(key, value);
            formState[key] = value;
        }
        console.groupEnd();

        const answers = Object.assign(this.state.answers, formState);

        this.setState({ answers });

        const userId = this.props.match.params.id;
        await AnswersHelper.updateAnswers(userId, formState);
    }

    _updateStateField(field, status) {
        console.warn('_updateStateField', field, status());
        const answers = Object.assign(this.state.answers, {
            [field]: status()
        });
        this.setState({ answers });
    }

    onChangeField_hasVisitedWorkshops(evt) {
        this._updateStateField('hasVisitedWorkshops', () => evt.target.value);
    }

    onChangeField_javascriptLevel(value) {
        this._updateStateField('javascriptLevel', () => value);
    }

    onChangeField_javascriptDurationExperience(evt) {
        this._updateStateField('javascriptDurationExperience', () => evt.target.value);
    }

    onChangeField_typescriptLevel(value) {
        this._updateStateField('typescriptLevel', () => value);
    }

    onChangeField_isTypeScriptLover(evt) {
        this._updateStateField('isTypeScriptLover', () => !this.state.answers.isTypeScriptLover);
    }

    onChangeField_knowsInterpolationProcess(evt) {
        this._updateStateField('knowsInterpolationProcess', () => !this.state.answers.knowsInterpolationProcess);
    }

    onChangeField_knowsDifferenceBetweenDOMAndHTML(evt) {
        this._updateStateField('knowsDifferenceBetweenDOMAndHTML', () => !this.state.answers.knowsDifferenceBetweenDOMAndHTML);
    }

    onChangeField_isSCSSLover(evt) {
        this._updateStateField('isSCSSLover', () => !this.state.answers.isSCSSLover);
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <Headline name={this.state.userName}/>

                    <p className="lead">
                        Odpowiadaj na pytania bez przekłamywania.
                    </p>

                    <Link to="/" className="btn btn-warning">
                        Powrót do strony głównej
                    </Link>
                </div>

                <form onSubmit={(evt) => this.onSubmit(evt)} ref={this.$form}>
                    <h2 className="bg-dark text-white p-2">Pytania</h2>

                    <h3>JavaScript</h3>

                    <div className="jumbotron py-4">
                        <div className="form-group">
                            <label>
                                Określ swój poziom znajomości języka JavaScript:
                            </label>

                            <div>
                                <StarRatingComponent
                                    className="stars"
                                    name="javascriptLevel"
                                    starCount={10}
                                    value={Number(this.state.answers.javascriptLevel)}
                                    onStarClick={(value) => this.onChangeField_javascriptLevel(value)}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="has-visited-workshops">
                                Czy byłeś kiedyś na warsztatach?
                            </label>

                            <div className="row">
                                <span className="col-3 text-danger text-center">
                                    Nie
                                </span>

                                <input
                                    id="has-visited-workshops"
                                    type="range"
                                    className="form-control-range col-6 p-0"
                                    name="hasVisitedWorkshops"
                                    step="1"
                                    min="0"
                                    max="1"
                                    value={this.state.answers.hasVisitedWorkshops}
                                    onChange={(evt) => this.onChangeField_hasVisitedWorkshops(evt)}
                                />

                                <span className="col-3 text-success text-center">
                                    Tak
                                </span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="javascript-experience">
                                Od ilu lat programujesz w JavaScript?
                            </label>
                            <select
                                className="form-control"
                                id="javascript-duration-experience"
                                name="javascriptDurationExperience"
                                value={this.state.answers.javascriptDurationExperience}
                                onChange={(evt) => this.onChangeField_javascriptDurationExperience(evt)}
                            >
                                <option value="0">wybierz</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                    </div>

                    <h3>TypeScript</h3>

                    <div className="jumbotron py-4">
                        <div className="form-group">
                            <label htmlFor="formControlRange">
                                Określ swój poziom znajomości języka TypeScript:
                            </label>

                            <br />
                            <StarRatingComponent
                                className="stars"
                                name="typescriptLevel"
                                starCount={10}
                                onStarClick={this.onStarClick}
                                value={Number(this.state.answers.typescriptLevel)}
                                onStarClick={(value) => this.onChangeField_typescriptLevel(value)}
                            />
                        </div>

                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input" type="checkbox" value="1" name="isTypeScriptLover"
                                    checked={this.state.answers.isTypeScriptLover}
                                    onChange={(evt) => this.onChangeField_isTypeScriptLover(evt)}
                                />
                                Czy preferujesz pisanie kodu w TypeScript?
                            </label>
                        </div>
                    </div>

                    <h3>HTML</h3>

                    <div className="jumbotron py-4">
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input" type="checkbox" value="1" name="knowsInterpolationProcess"
                                    checked={this.state.answers.knowsInterpolationProcess}
                                    onChange={this.onChangeField_knowsInterpolationProcess}
                                />
                                Czy wiesz co to jest interpolacja?
                            </label>
                        </div>
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input" type="checkbox" value="1" name="knowsDifferenceBetweenDOMAndHTML"
                                    checked={this.state.answers.knowsDifferenceBetweenDOMAndHTML}
                                    onChange={(evt) => this.onChangeField_knowsDifferenceBetweenDOMAndHTML(evt)}
                                />
                                Czy znasz rożnicę między elementem DOM a znacznikiem HTML?
                            </label>
                        </div>
                    </div>

                    <h3>SASS</h3>

                    <div className="jumbotron py-4">
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input" type="checkbox" value="1" name="isSCSSLover"
                                    checked={this.state.answers.isSCSSLover}
                                    onChange={(evt) => this.onChangeField_isSCSSLover(evt)}
                                />
                                Czy znasz składnię SCSS?
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Zapisz" />
                    </div>
                </form>
            </div>
        );
    }
}

export default FormComponent;
