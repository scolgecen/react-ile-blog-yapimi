import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Blog from './pages/blog/Blog';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';


export default function App() {

	const {mode} = useTheme();
  return (
    <div className={`App ${mode}`}>
      
    <BrowserRouter>
    <Navbar />
	<ThemeSelector />
	<Switch>
	  <Route exact path="/">
		<Home/>
	  </Route>
	  <Route path="/create">
		<Create/>
	  </Route>
	  <Route path="/search">
		<Search/>
	  </Route>
	  <Route path="/blog/:id">
		<Blog/>
	  </Route>
	</Switch>
</BrowserRouter>
    </div>
  )
}
