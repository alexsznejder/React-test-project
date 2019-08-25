import actions from './actions'

const fetchPosts = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
  const json = await response.json()

  return json
}

export const getAllPosts = () => 
  async(dispatch) => {
    const posts = await fetchPosts();
    posts.map(post => {
      dispatch(actions.add(post))
      dispatch(actions.increment())
    })
  }
