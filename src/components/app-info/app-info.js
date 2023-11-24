

import './app-info.css';

const AppInfo = ({totalEmployees, increase}) => {
        return(
            <div className="app-info">
                <h1>Учет сотрудников в компании</h1>
                <h2>Общее число сотрудников: {totalEmployees}</h2>
                <h2>Премию получат: {increase} </h2>
            </div>
        )
    }
   


export default AppInfo;
