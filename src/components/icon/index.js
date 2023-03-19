import Heart from './heart'
import Branch from './branch'
import ArrowDown from './arrow-down'
import Book from './book'
import Cancel from './cancel'
import Check from './check'
import Github from './github'
import Home from './home'
import Link from './link'
import Search from './search'
import Location from './location.js'
import Twitter from './twitter'
import User from './user'
import Star from './star'

function Index({name, ...props}) {
  switch (name) {
    case 'book': {
      return <Book {...props}/>
    }
    case 'arrow-down': {
      return <ArrowDown {...props}/>
    }
    case 'branch': {
      return <Branch {...props}/>
    }
    case 'cancel': {
      return <Cancel {...props}/>
    }
    case 'check': {
      return <Check {...props}/>
    }
    case 'github': {
      return <Github {...props}/>
    }
    case 'heart': {
      return <Heart {...props}/>
    }
    case 'home': {
      return <Home {...props}/>
    }
    case 'link': {
      return <Link {...props}/>
    }
    case 'location': {
      return <Location {...props}/>
    }
    case 'star': {
      return <Star {...props}/>
    }
    case 'search': {
      return <Search {...props}/>
    }
    case 'twitter': {
      return <Twitter {...props}/>
    }
    case 'user': {
      return <User {...props}/>
    }
    default: {
      return null
    }
  }
}

Index.defaultProps = {
  size: 16,
  color: 'var(--grey)'
}

export default Index
