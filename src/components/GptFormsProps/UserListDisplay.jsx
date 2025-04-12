const UserListDisplay = ({ users }) => {
    
    // global state useContext method: re-instantiate global state here for use in this component
    return (
        <div>
            {users.map((user) => (
                <li key={user.email}>
                    {user.name}, {user.email}
                </li>
            ))}
        </div>
    )
}

export default UserListDisplay;