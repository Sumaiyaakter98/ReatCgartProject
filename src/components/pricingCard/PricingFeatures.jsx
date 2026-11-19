import React from 'react'
import { Check } from 'lucide-react';
const PricingFeatures = ({feature}) => {
  return (
    <p className=' flex mt-4'>
        <Check className='mr-2'/>{feature}
    </p>
  )
}

export default PricingFeatures