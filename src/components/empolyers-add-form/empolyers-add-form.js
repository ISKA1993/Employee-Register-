
import { Component } from 'react';
import './empoyers-add-form.css'

class EmlpyersAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addEmployeers  = (e) =>{
        e.preventDefault();
        const {name,salary} = this.state;

        this.props.onAddEmployee(name, salary);
        this.setState({
            name: '',
            salary: 0,
          });
    }

    render(){
        const {name,salary} = this.state

    return (
        <div className="app-add-form">
            <h3>Добавте нового сотрудника</h3>
            <form className="add-form d-flex"
            >
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Имя сотрудника"
                       onChange={this.onValueChange}
                       name="name"
                       value={name} />
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="З/п сотрудника в $"
                       onChange={this.onValueChange}
                       name="salary"
                       value={salary} />
                <button type="submit"
                        className="btn btn-outline-light"
                        onClick={this.addEmployeers}>
                        Добавить
                </button>
            </form>
        </div>
    )
    }
}

export default EmlpyersAddForm;