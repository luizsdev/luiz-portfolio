import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Playground } from '../pages/Playground'
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playground" element={<Playground />}></Route>
    </Routes>
  )
}
