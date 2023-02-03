import {FC} from 'react'
import Navbar from '../../../components/Navbar/Navbar'

const HomeScreen: FC<{ Component: FC }> = ({ Component }) => {
  return (
    <>
        <Navbar Component={Component}/>
    </>
  )
}

export default HomeScreen