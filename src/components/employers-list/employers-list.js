
import EmployeesListItem from '../employers-list-item/employers-list-item';

import './employers-list.css'

const EmployersList = ({data, onDelete, onToggleIncrease}) => {

    const elements = data.map(item =>{

        const {id, ...itemProps} = item

        return(
            <EmployeesListItem key={id} 
                              {...itemProps}
                              onDelete={() => onDelete(id)}
                              onToggleIncrease={(e) => onToggleIncrease(id, e.currentTarget.getAttribute('data-toggle'))}
                              />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;