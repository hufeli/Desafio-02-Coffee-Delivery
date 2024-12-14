import { NavLink } from 'react-router-dom'
import logotipoCoffeeDelivery from '../../assets/logotipo-coffee-delivery.svg'
import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logotipoCoffeeDelivery} alt="Logotipo Coffee Delivery" />
      <nav>
        <NavLink to="#">
          <MapPin size={22} weight="fill" />
          Presidente Epitácio / SP
        </NavLink>
        <NavLink to="checkout" title="Checkout">
          <ShoppingCart size={40} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
