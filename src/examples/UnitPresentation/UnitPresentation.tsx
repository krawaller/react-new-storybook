import React from 'react'
import { Unit, base64 } from '../../data/wesnoth'

export type UnitPresentationProps = {
  unit: Unit
}

export const UnitPresentation = ({ unit }: UnitPresentationProps) => {
  console.log(unit.image, !!base64[unit.image])
  return (
    <div>
      {unit.name}{' '}
      <div
        style={{
          backgroundImage: `url(${base64[unit.image]})`,
          height: 80,
          width: 80,
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  )
}
