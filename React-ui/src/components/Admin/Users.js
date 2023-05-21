import React, {Component} from 'react'
import { Link } from "react-router-dom";
import axios from '../../axios'

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Users: []
            Utemp: []
        };
    }
    getUsersData() {
        axios
            .get(`/book`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map(u =>
                    <div>
                    <p>{u.bookid}</p>
                    <p>{u.bookname}</p>
                    <p>{u.price}</p>
                    {/* <p>{u.website}</p>
                    <p>{u.company.name}</p> */}
                    </div>
                    )

                    this.setState({
                        users
                    })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    render() {

        return (
            <>
                <p>hello</p>
                {this.state.users}
                
    
            </>
        )
    }
}
export default  Books;











