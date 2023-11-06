import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const PageError: FC = () => {
  const navigate = useNavigate()
  const reloadPage = () => {
    location.reload()
  }
  const goToMainPage = () => {
    navigate('/')
  }
  return (
    <div>
      Упс, что-то пошло не так.
      Нажмите, чтобы перезагрузить страницу.
      <button onClick={reloadPage}>Перезагрузить страницу</button>
      Если не помогло, то вернитесь на главную
      <button onClick={goToMainPage}>На главную</button>
    </div>
  )
}
