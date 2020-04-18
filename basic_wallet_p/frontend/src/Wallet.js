import React from "react";
import axios from "axios";

/*
 * Allow the user to enter, save, or change the `id` used for the program.
 * Display the current balance for that user.
 * Display a list of all transactions for this user, including sender and recipient.
 */

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      current_balance: 0,
      sender: '',
      recipient: '',
      transactions: 0
        };
    }   

    componentDidMount = () => {
        axios
            .get("127.0.0.1:5000", {
                headers: {
                    Authorization: 'Tokens For Free@@@!!!!!$$$###'
                }
            })
            .then(res => {
                this.setState({
                    current_balance: res.data
                })
            })
            .catch(err => {
                console.info(err)
            })
        }
    }

    onSubmit = () => {
        this.setState({ id: })
    }

  Wallet = () => {
    return (
      <div className="container">
        <form onSubmit={}>
          <div>
            <label>choose id for this program</label>
            <input type="number" placeholder="100" />
            <button onClick={() => this.setState({id: id})}>Select ID</button>

            <h4 className="current-balance">
              Current Balance: {this.state.current_balance}
            </h4>
          </div>
        </form>
      </div>
    );
  };

  render() {
    return (
      <>
        <Wallet />
        <div></div>
      </>
    );
  }
}

export default Wallet;
