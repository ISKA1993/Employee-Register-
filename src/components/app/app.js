import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmlpyersAddForm from '../empolyers-add-form/empolyers-add-form';


import './app.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: [{name: "Yslam B" , salary: "600", increase: false, rise: false, id: 1},
            {name: "Kuvvat C" , salary: "1600", increase: false, rise: false, id: 2},
            {name: "Sardar G" , salary: "800",  increase: false, rise: false, id: 3},],
            lastId: 3,
            tern: '',
            filter: 'all',
        }        
    }

    deletItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleIncrease = (id, prop) =>{
        this.setState(({data}) =>({
            data: data.map(item =>{
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    addEmployeers = (name, salary) => {
        const nextId = this.state.lastId + 1;
        const newEmployee = {
            name,
            salary,
            increase: false,
            rise: false,
            id: nextId
          };
    this.setState(prevState => ({
        data: [...prevState.data, newEmployee],
        lastId: nextId,
    }));
    }

    getTotalEmployees = () => {
        return this.state.data.length;
    }

    serachEmp = (items, term) => {
        if (term.length === 0){
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (tern) =>{
        this.setState({tern})
    }

    filterPost = (items, filter) =>{
        switch (filter){
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render(){
        const {data, tern, filter} =this.state;
        const totalEmployees = this.getTotalEmployees();
        const increase = this.state.data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.serachEmp(data, tern), filter);


        return (
            <div className="app">
                <AppInfo totalEmployees={totalEmployees}
                         increase={increase}
                         />
    
                <div className='search-panel'>
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter}
                               onFilterSelect={this.onFilterSelect}/>
                </div>
    
            <EmployersList data={visibleData}
                           onDelete={this.deletItem}
                           onToggleIncrease={this.onToggleIncrease}
                           />
    
            <EmlpyersAddForm onAddEmployee={this.addEmployeers}/>
    
            </div>
        )
    }

}

export default App;