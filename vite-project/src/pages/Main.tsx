import { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import '../App.css'

function App() {
  const [activInput, setActiveInput] = useState('')
  function handleActiveInput(e: any) {
    let nameInput = e.target.name;
    setActiveInput(nameInput)
  }

  const [inputsState, setInputsState] = useState({name: '', email:'', password:''})
  const handleOnChange = (e: any) => {
    const {name, value} = e.target;
    setInputsState({...inputsState, [name]:value})
  }
  
  const navigate = useNavigate()
  const handleBtnClick = async () => {
    const {name, email, password} = inputsState;
    if (name && email && password) {
      
      fetch('http://localhost:8080/', {
        method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
        body: JSON.stringify(inputsState), // Тело запроса в JSON-формате
        headers: {
          // Добавляем необходимые заголовки
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data === 'success') {
          setInputsState({name: '', email:'', password:''})
          navigate('/success_reg')
        }
        else if (data === 'login') {
          setInputsState({name: '', email:'', password:''})
          navigate('/login')
        }
      })

    }
    
  
  }
   

  return (
    <>
      <div className='reg' onClick={() => setActiveInput('')}>
        <img src="./background_img.svg" alt="background-img" className='reg__backImg'/>
        <div className='reg__wrapper'>
          <h1>Стань участником!</h1>

          <div className='reg__inputWrapper'>

            <div className='reg__inputIconWrapper'>
              <svg  viewBox="0 0 20 18" fill='none' xmlns="http://www.w3.org/2000/svg">
                <path fill={activInput=== 'name' ? '#4570FF' : 'black'} className='reg__input-icon' d="M9.99996 8.18001C8.89951 8.18001 7.95774 7.78801 7.17462 7.00401C6.39151 6.22001 5.99996 5.27867 5.99996 4.18001C5.99996 3.07956 6.39151 2.13734 7.17462 1.35334C7.95774 0.571119 8.89951 0.180008 9.99996 0.180008C11.1004 0.180008 12.0422 0.571119 12.8253 1.35334C13.6084 2.13734 14 3.07956 14 4.18001C14 5.27956 13.6084 6.2209 12.8253 7.00401C12.0422 7.78712 11.1004 8.17912 9.99996 8.18001ZM0.666626 17.82V15.6267C0.666626 15.0765 0.826626 14.5618 1.14663 14.0827C1.46751 13.6027 1.89863 13.2302 2.43996 12.9653C3.69863 12.3618 4.95774 11.9093 6.21729 11.608C7.47774 11.3058 8.73863 11.1547 9.99996 11.1547C11.2622 11.1547 12.5231 11.3058 13.7826 11.608C15.0422 11.9102 16.3008 12.3627 17.5586 12.9653C18.1008 13.2302 18.532 13.6027 18.852 14.0827C19.1728 14.5618 19.3333 15.0765 19.3333 15.6267V17.8213L0.666626 17.82ZM1.99996 16.4867H18V15.6253C18 15.3302 17.9048 15.0525 17.7146 14.792C17.5235 14.5325 17.2595 14.3129 16.9226 14.1333C15.8257 13.6018 14.6942 13.1947 13.528 12.912C12.3635 12.6285 11.1875 12.4867 9.99996 12.4867C8.81329 12.4867 7.63729 12.6285 6.47196 12.912C5.30574 13.1947 4.17418 13.6018 3.07729 14.1333C2.73951 14.3129 2.47552 14.5325 2.28529 14.792C2.09507 15.0525 1.99996 15.3307 1.99996 15.6267V16.4867ZM9.99996 6.84667C10.7333 6.84667 11.3613 6.58534 11.884 6.06267C12.4066 5.54001 12.6675 4.91245 12.6666 4.18001C12.6666 3.44667 12.4053 2.81867 11.8826 2.29601C11.36 1.77334 10.7324 1.51245 9.99996 1.51334C9.26663 1.51334 8.63863 1.77423 8.11596 2.29601C7.59329 2.81779 7.3324 3.44579 7.33329 4.18001C7.33329 4.91334 7.59463 5.5409 8.11729 6.06267C8.63996 6.58445 9.26751 6.84579 9.99996 6.84667Z" />
              </svg>
              <input onChange={handleOnChange} onClick={(e) => {e.stopPropagation() ;handleActiveInput(e)}} className='reg__input' value={inputsState.name} name='name' type="text" placeholder='Имя'/>
            </div>
           
            <div className='reg__inputIconWrapper'>
            <svg  viewBox="0 0 20 16" fill='none' xmlns="http://www.w3.org/2000/svg">
              <path fill={activInput==='email' ? '#4570FF' : 'black'} className='reg__input-icon' d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 6.99L2 2H18ZM18 14H2V4L10 9L18 4V14Z"  fillOpacity='.7'/>
            </svg>
            <input onChange={handleOnChange} onClick={(e) => {e.stopPropagation() ;handleActiveInput(e)}} name='email' value={inputsState.email} className='reg__input' type="text" placeholder='Ваша почта' />
            </div>

            <div className='reg__inputIconWrapper'>
            <svg  viewBox="0 0 23 15" fill='none' xmlns="http://www.w3.org/2000/svg">
              <path fill={activInput==='password' ? '#4570FF' : 'black'} className='reg__input-icon' d="M22.2192 7.20891C22.1878 7.13793 21.4268 5.44977 19.7351 3.75801C17.4809 1.50383 14.6337 0.3125 11.5 0.3125C8.36624 0.3125 5.51909 1.50383 3.26491 3.75801C1.57316 5.44977 0.808585 7.14062 0.780734 7.20891C0.739867 7.30083 0.71875 7.4003 0.71875 7.5009C0.71875 7.60149 0.739867 7.70097 0.780734 7.79289C0.812179 7.86387 1.57316 9.55113 3.26491 11.2429C5.51909 13.4962 8.36624 14.6875 11.5 14.6875C14.6337 14.6875 17.4809 13.4962 19.7351 11.2429C21.4268 9.55113 22.1878 7.86387 22.2192 7.79289C22.2601 7.70097 22.2812 7.60149 22.2812 7.5009C22.2812 7.4003 22.2601 7.30083 22.2192 7.20891ZM11.5 13.25C8.7346 13.25 6.3187 12.2446 4.31878 10.2627C3.49819 9.44664 2.80005 8.51609 2.24609 7.5C2.7999 6.48381 3.49805 5.55324 4.31878 4.7373C6.3187 2.75535 8.7346 1.75 11.5 1.75C14.2654 1.75 16.6813 2.75535 18.6812 4.7373C19.5034 5.55305 20.2031 6.48361 20.7584 7.5C20.1106 8.7093 17.2886 13.25 11.5 13.25ZM11.5 3.1875C10.6471 3.1875 9.81328 3.44042 9.10409 3.91429C8.39491 4.38815 7.84216 5.06167 7.51576 5.84968C7.18936 6.63768 7.10396 7.50478 7.27035 8.34133C7.43675 9.17787 7.84748 9.94628 8.45059 10.5494C9.05371 11.1525 9.82212 11.5632 10.6587 11.7296C11.4952 11.896 12.3623 11.8106 13.1503 11.4842C13.9383 11.1578 14.6118 10.6051 15.0857 9.8959C15.5596 9.18671 15.8125 8.35293 15.8125 7.5C15.8113 6.35662 15.3566 5.26041 14.5481 4.45192C13.7396 3.64342 12.6434 3.18869 11.5 3.1875ZM11.5 10.375C10.9314 10.375 10.3755 10.2064 9.90273 9.89048C9.42994 9.57457 9.06144 9.12555 8.84384 8.60021C8.62624 8.07488 8.5693 7.49681 8.68023 6.93912C8.79117 6.38142 9.06498 5.86914 9.46706 5.46707C9.86913 5.06499 10.3814 4.79117 10.9391 4.68024C11.4968 4.56931 12.0749 4.62624 12.6002 4.84385C13.1255 5.06145 13.5746 5.42994 13.8905 5.90274C14.2064 6.37553 14.375 6.93138 14.375 7.5C14.375 8.2625 14.0721 8.99376 13.5329 9.53293C12.9938 10.0721 12.2625 10.375 11.5 10.375Z" />
            </svg>
            <input onChange={handleOnChange} onClick={(e) => {e.stopPropagation() ;handleActiveInput(e)}} name='password' value={inputsState.password} className='reg__input' type="text" placeholder='Напиши свой пароль'/>
            </div>
          </div>

          <button onClick={handleBtnClick} className='reg__btn'>ГОТОВО</button>

          {/* <div className='reg__line'>
            <div className='reg_breakLine'></div>
            <p className='reg__breakText'>or</p>
            <div className='reg_breakLine'></div>            
          </div>

          <div className='reg__socialMedia'>
            <div className='reg__socialIco'><img src="./google_ico.svg" alt="Google" /></div>
            <div className='reg__socialIco'><img src="./vk_ico.svg" alt="Google" /></div>
            <div className='reg__socialIco'><img src="./apple_ico.svg" alt="Google" /></div>
          </div> */}

        </div>

        <div className='reg__info'>
          <p className='reg__infoText'>Конфиденциальность</p>
          <div className='reg__infoLine'></div>
          <p className='reg__infoText'>Помощь</p>
          <div className='reg__infoLine'></div>
          <p className='reg__infoText'>Язык интерфейса</p>
        </div>
      </div>
    </>
  )
}

export default App
