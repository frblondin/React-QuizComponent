import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class QuizQuestionButton extends Component {
    handleClick() {
        this.props.clickHandler(this.props.button_text)
    }
    render() {
        return (
            <Button onClick={this.handleClick.bind(this)}
                        variant="outlined"
                        color="primary">
                {this.props.button_text}
            </Button>
        )
    }
}

export default QuizQuestionButton