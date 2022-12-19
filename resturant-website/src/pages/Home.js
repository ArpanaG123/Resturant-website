import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Banner from '../images/banner.jpeg'
import '../styles/HomeStyles.css'
const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${Banner})`}}>
          <div className='headerConatiner'>
            <h1>Food website</h1>
            <p>Best Food in India</p>
            <Link to='/menu'>
              <button>Order now</button>
            </Link>
            
          </div>
          
        </div>
    </Layout>
  )
}

export default Home