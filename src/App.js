import { useEffect, useRef } from "react";

function App() {


  const ref = useRef()
  useEffect(()=>{
    let images = ref.current.querySelectorAll('img'),
    total =images.length,
    current = 0

    setInterval(()=>{
      if(current > 0){
          images[current- 1].classList.add('opacity-0')
      }else{
        images[total- 1].classList.add('opacity-0')
      }
      images[current].classList.remove('opacity-0')

        if(current == total -1){
          current = 0
        }else{
           current += 1
        }
    },2000)

  }, [ref])


  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32px _634.15px] bg-[top_left_-46px]">
        <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity" src="screenshot1.png" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity" src="screenshot2.png" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity" src="screenshot3.png" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity" src="screenshot4.png" />



        </div>
      </div>
    </div>
  );
}

export default App;