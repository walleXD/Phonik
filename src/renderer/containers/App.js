import React from 'react'
import { View } from 'react-native'
import { Switch, Route, Link } from 'react-router-dom'

import HomePage from '../pages/home'
import AuthorsPage from '../pages/authors'
import BooksPage from '../pages/books'

import AppBar from '../components/AppBar'

const App = () =>
  <View>
    <div style={{WebkitAppRegion: 'drag'}}>
      <AppBar />
    </div>
    <View>
      <Link to='/books'>Books</Link>
      <Link to='/authors'>Authors</Link>
      <Link to='/'>Home</Link>
    </View>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/authors' component={AuthorsPage} />
      <Route path='/books' component={BooksPage} />
    </Switch>
  </View>

export default App
