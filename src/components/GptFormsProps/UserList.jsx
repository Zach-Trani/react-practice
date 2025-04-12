import { useState, useEffect } from "react";
import axios from "axios";
import UserListDisplay from "./UserListDisplay.jsx";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUsers = async () => {

            try {
                setLoading(true);
                setError(null);

                
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                // remember, updating state causes component to re-render, 
                // after initial render with loading displayed, this line triggers a re-render
                setUsers(res.data);
                console.log(res.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false)
            }
        }
        getUsers();
    }, []);

    if (loading) return <p>loading...</p>
    if (error) return <p>{error.message}</p>

    return (
        <div>
            {/*  */}
            <UserListDisplay users={users} />
        </div>
    )
}
export default UserList;