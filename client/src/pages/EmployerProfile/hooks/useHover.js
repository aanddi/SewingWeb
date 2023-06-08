import {useState, useEffect} from 'react'

export default function useHover(ref) {
     
     const [isHover, setHover] = useState(false)

     const active = () => setHover(true)
     const unactive = () => setHover(false)

     useEffect( () => {

          if(!ref.current) {
               return;
          }

          const node = ref.current;

          node.addEventListener('mouseenter', active)
          node.addEventListener('mousemove', active)
          node.addEventListener('mouseleave', unactive)


          return function () {
               node.removeEventListener('mouseenter', active)
               node.removeEventListener('mousemove', active)
               node.removeEventListener('mouseleave', unactive)
          }

     }, [])

     return isHover
}