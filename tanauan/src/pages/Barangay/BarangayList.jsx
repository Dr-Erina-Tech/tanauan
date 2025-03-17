import React from 'react'
import { ListOverview } from '../../components'
import barangayData from './barangayData.js';

const BarangayList = () => {
  return (
    <ListOverview 
      title="48 Barangays"
      list={barangayData.listOverview} //pass only the listOverview data
    />
  )
}

export default BarangayList;
