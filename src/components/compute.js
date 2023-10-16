import React, { Component } from 'react';
import './compute.css';

export class Calc extends Component {
  constructor() {
    super();
    this.state = {
      exp: '',   // Expression input
      result: '', // Calculated result
    };
  }

  // Function to update the expression
  handleButtonClick = (value) => {
    if (value === '=' && this.state.exp) {
      try {
        const result = eval(this.state.exp);
        this.setState({ result, exp: String(result) });
      } catch (error) {
        this.setState({ result: 'Error' });
      }
    } else if (value === 'C') {
      this.setState({ exp: '', result: '' });
    } else if(value=='B'){
        this.setState((prevState) => ({
            exp: prevState.exp.slice(0, -1),
        }));
    }else {
      this.setState((prevState) => ({
        exp: prevState.exp + value,
      }));
    }
  };

  render() {
    return (
      <div>
        <div class="heading"><span class="title">Calculator</span></div>
        <div className="outerbox">
          <div className="output">
            <div className="calculations">
              {this.state.exp}
            </div>
            <div className="result">
              {this.state.result}
            </div>
          </div>
          <div className="keypad">
            <table>
              <tbody>
              <tr>
                  <td onClick={() => this.handleButtonClick('C')}>
                  <i class="fa-solid fa-c"></i>
                  </td>
                  <td onClick={() => this.handleButtonClick('%')}>
                  <i class="fa-light fa-percent"></i>
                  </td>
                  <td onClick={() => this.handleButtonClick('B')}>
                  <i className="fas fa-backspace"></i>
                  </td>
                  <td onClick={() => this.handleButtonClick('/')}>
                  <i class="fa-solid fa-divide"></i>
                  </td>
                </tr>
                <tr>
                  <td onClick={() => this.handleButtonClick('7')}>7</td>
                  <td onClick={() => this.handleButtonClick('8')}>8</td>
                  <td onClick={() => this.handleButtonClick('9')}>9</td>
                  <td onClick={() => this.handleButtonClick('*')}>
                  <i className="fas fa-times"></i>
                  </td>
                </tr>
                <tr>
                  <td onClick={() => this.handleButtonClick('4')}>4</td>
                  <td onClick={() => this.handleButtonClick('5')}>5</td>
                  <td onClick={() => this.handleButtonClick('6')}>6</td>
                  <td onClick={() => this.handleButtonClick('-')}>
                  <i className="fas fa-minus"></i>
                  </td>
                </tr>
                <tr>
                  <td onClick={() => this.handleButtonClick('1')}>1</td>
                  <td onClick={() => this.handleButtonClick('2')}>2</td>
                  <td onClick={() => this.handleButtonClick('3')}>3</td>
                  <td onClick={() => this.handleButtonClick('+')}>
                  <i className="fas fa-plus"></i>
                  </td>
                </tr>
                <tr>
                  <td onClick={() => this.handleButtonClick('00')}>00</td>
                  <td onClick={() => this.handleButtonClick('0')}>0</td>
                  <td onClick={() => this.handleButtonClick('.')}>.</td>
                  <td onClick={() => this.handleButtonClick('=')}>
                    <i className="fas fa-equals"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}