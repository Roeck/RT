import React from 'react';

interface IProps{}
interface IState{
    name : string;
    age : number;
    title : string;
}

export class EmployeeClass extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            name : 'Rajan',
            age : 25,
            title : 'Software Engineer'
        } as IState
    }

    render() {
        let {name , age , title} = this.state;
        return (
            <React.Fragment>
                <h3>Employee Class Component</h3>
                <li className="list-group-item">
                    Name : {name}
                </li>
                <li className="list-group-item">
                    Age : {age}
                </li>
                <li className="list-group-item">
                    Title : {title}
                </li>
            </React.Fragment>
        );
    }

}
