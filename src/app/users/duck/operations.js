import actions from './actions'

const fetchUsers = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
  const json = await response.json()

  return json
}

export const getAllUsers = () => 
  async(dispatch) => {
    const users = await fetchUsers();
    users.map(user => dispatch(actions.add(user)))
  }
