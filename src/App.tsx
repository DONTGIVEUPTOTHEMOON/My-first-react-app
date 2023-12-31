import './App.css'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { PostDTO } from './types/dto'

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Greeting/>
//       <Footer />
//     </div>
//   )
// }

// export default App

const posts: PostDTO[] = [
  {
    id: 1,
    userId: 1,
    title: "Let's learn React!",
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    userId: 2,
    title: 'How to install Node.js',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 3,
    userId: 3,
    title: 'Basic HTML',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 4,
    userId: 3,
    title: 'Basic HTML',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting name="Bun" greetingMsg="Hello!" isLoggedIn={true} />
      <div className="feed-container">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App
