import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

import Headline from './headline';

class FormComponent extends Component {

    constructor(props) {
        super(props);
        this.$form = React.createRef();
    }

    onStarClick(...args) {
        console.log(...args);
    }

    onSubmit(evt) {
        evt.preventDefault();

        const $form = new FormData(this.$form.current);

        console.group('Dane formularza');
        for (let field of $form.entries()) {
            console.log(field);
        }
        console.groupEnd();
    }

    render() {
        const userId = this.props.match.params.id;
        console.log({ userId });

        return (
            <div className="container">
                <div className="jumbotron">
                    <Headline />

                    <p className="lead">
                        Odpowiedz na pytania sumiennie.
                    </p>

                    <Link to="/" className="btn btn-warning">
                        Powrót do strony głównej
                    </Link>
                </div>

                <form onSubmit={(evt) => this.onSubmit(evt)} ref={this.$form}>
                    <h2>Pytania</h2>

                    <h3>JavaScript</h3>

                    <div className="form-group">
                        <label htmlFor="formControlRange">
                            Określ swój poziom znajomości języka JavaScript:
                        </label>

                        <br />
                        <StarRatingComponent
                            className="stars"
                            name="javascript-level"
                            starCount={10}
                            onStarClick={() => this.onStarClick()}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="range"
                            className="form-control-range"
                            id="formControlRange"
                            name="range"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="javascript-experience">
                            Od ilu lat programujesz w JavaScript?
                        </label>
                        <select
                            className="form-control"
                            id="javascript-experience"
                            name="javascript-experience"
                        >
                            <option>wybierz</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <h3>TypeScript</h3>

                    <div className="form-group form-check">
                        <input className="form-check-input" type="checkbox" value="yes" id="defaultCheck2" name="is-typescript-lover" />
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            Czy preferujesz pisanie kodu w TypeScript?
                        </label>
                    </div>

                    <h3>CoffeeScript</h3>

                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Zapisz" />
                    </div>
                </form>
            </div>
        );
    }
}

export default FormComponent;
