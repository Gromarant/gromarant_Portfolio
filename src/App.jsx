import './App.css'
import Project_banner from './components/Project_banner/Project_banner'

const projects = [
  {
    "img": "FullPokeApp",
    "btns": ['Prototype', 'Web', 'Repository'],
    "title": "FullPokeApp",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore sed expedita eos accusantium ea repellendus neque illo animi laboriosam consequatur cupiditate eligendi dolorum, aliquid, earum delectus unde praesentium nobis?",
    "functionalities" : ['func_1', 'func_2', 'func_3'],
    "copyRight":'Mariangelica Rodriguez',
  },
  {
    "img": "Groma-Snake",
    "btns": ['Prototype', 'Web', 'Repository'],
    "title": "Groma-Snake",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore sed expedita eos accusantium ea repellendus neque illo animi laboriosam consequatur cupiditate eligendi dolorum, aliquid, earum delectus unde praesentium nobis?",
    "functionalities" : ['func_1', 'func_2', 'func_3'],
    "copyRight":'Mariangelica Rodriguez',
  },
]

function App() {

  return (
    <>
      <Project_banner projects={projects} />
    </>
  )
}

export default App
