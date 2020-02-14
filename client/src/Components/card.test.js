import React from 'react'
import {render} from '@testing-library/react'
import Header from './Header'


test('Renders Header', () => {
    const { getByText } = render(<Header />);
    getByText(/Women's world cup players/i);
  })


  test('Renders darkmode stuffs', () =>{
      const {getByTestId} = render(<Header/>)
      getByTestId(/darkmodess/i)
  })