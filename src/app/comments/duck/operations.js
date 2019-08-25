import actions from './actions'

const fetchComments = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments', {method: 'GET'})
  const json = await response.json()

  return json
}

export const getAllComments = () => 
  async(dispatch) => {
    const comments = await fetchComments();
    console.log(comments)
    comments.map(comment => dispatch(actions.add(comment)))
    console.log(comments)
  }
