import * as React from 'react'
import { formatEther } from '@/utils'
import * as Styled from './Price.styled'
import { useContractData } from '@/context/ContractContext'
import { Container } from '@/components/Container'
import { AnimatedEther } from '@/components/Icons/AnimatedEther'
import { getGasPrice } from '@/services/lottery'

export const Price = () => {
  const [gasPrice, setGasPrice] = React.useState(0)
  //    const [priceLoading, setPriceLoading] = React.useState(true)
  const [refresh, setRefresh] = React.useState(false)

  const { price } = useContractData()

  React.useEffect(() => {
    const getPrice = async () => {
      const gas = await getGasPrice()
      if (gas) {
        setGasPrice(gas)
      }
      // setPriceLoading(false)
    }

    if (refresh) {
      getPrice()
    }

    setRefresh(false)
  }, [refresh])

  setInterval(() => {
    setRefresh(true)
  }, 5000)

  console.log(gasPrice)

  //  if(priceLoading) return <Spinner />

  return (
    <Container>
      <Styled.PriceContainer>
        <Styled.Price>{formatEther(price) + '+' + gasPrice}</Styled.Price>
      </Styled.PriceContainer>
      <AnimatedEther width="20" />
    </Container>
  )
}
